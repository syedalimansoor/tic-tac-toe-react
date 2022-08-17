onmessage = (message) => {
  const result = minimax(...message.data);
  postMessage(result);
};

function minimax(grid, gridCounters, isMaximising) {
  const moves = [];
  const mark = isMaximising ? "O" : "X";

  // Loop through all cells
  for (let rowIdx = 0; rowIdx < grid.length; rowIdx++) {
    const row = grid[rowIdx];

    for (let colIdx = 0; colIdx < row.length; colIdx++) {
      const cell = row[colIdx];

      if (!cell.mark) {
        cell.mark = mark;

        // Create a copy of the grid counters and update them
        const newGridCounters = deepCopy(gridCounters);
        updateGridCountersAbstract(
          newGridCounters,
          grid.length,
          rowIdx,
          colIdx,
          mark
        );

        // Create a move object
        const move = { rowIdx, colIdx, score: 0 };

        // Check if the move makes a match and update score accordingly
        const gridState = checkForMatch(newGridCounters, grid.length);
        if (gridState.doesMatchExist) {
          if (gridState.mark === "O") {
            move.score = 1;
          } else {
            move.score = -1;
          }
        }

        // RECURSION!!@^7$*#%
        else {
          move.score = minimax(grid, newGridCounters, !isMaximising).score;
        }

        moves.push(move);

        // Reset
        cell.mark = null;
      }
    }
  }

  if (!moves.length) {
    return { rowIdx: null, colIdx: null, score: 0 };
  }

  // Find the best possible move and return it
  const bestMove = moves.reduce((bestMove, nextMove) => {
    if (isMaximising) {
      if (nextMove.score > bestMove.score) {
        return nextMove;
      }
      return bestMove;
    }

    if (nextMove.score < bestMove.score) {
      return nextMove;
    }
    return bestMove;
  });
  return bestMove;
}

function updateGridCountersAbstract(
  gridCounters,
  gridSize,
  rowIdx,
  colIdx,
  mark
) {
  if (rowIdx === colIdx) gridCounters.main[mark] += 1;
  if (rowIdx + colIdx === gridSize - 1) gridCounters.anti[mark] += 1;

  gridCounters.rows[rowIdx][mark] += 1;
  gridCounters.cols[colIdx][mark] += 1;
  return gridCounters;
}

function deepCopy(obj) {
  return JSON.parse(JSON.stringify(obj));
}

function checkCounter(counter, gridSize) {
  if (counter.O === gridSize) return "O";
  if (counter.X === gridSize) return "X";
  return false;
}

function checkForMatch(gridCounters, gridSize) {
  const { main, anti, rows, cols } = gridCounters;

  let result;
  if ((result = checkCounter(main, gridSize)))
    return { doesMatchExist: true, main: true, mark: result };

  if ((result = checkCounter(anti, gridSize)))
    return { doesMatchExist: true, anti: true, mark: result };

  for (let rowIdx = 0; rowIdx < rows.length; rowIdx++) {
    if ((result = checkCounter(rows[rowIdx], gridSize)))
      return { doesMatchExist: true, rowIdx, mark: result };
  }

  for (let colIdx = 0; colIdx < cols.length; colIdx++) {
    if ((result = checkCounter(cols[colIdx], gridSize)))
      return { doesMatchExist: true, colIdx, mark: result };
  }

  return { doesMatchExist: false };
}
