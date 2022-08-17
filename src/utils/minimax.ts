import { GridCell, GridCounters, GridSize } from "$/features/grid";
import checkForMatch from "./checkForMatch";
import deepCopy from "./deepCopy";
import updateGridCountersAbstract from "./updateGridCounters";

type Coordinates = {
  rowIdx: number | null;
  colIdx: number | null;
};

export type Move = Coordinates & {
  score: number;
};

export default function minimax(
  grid: GridCell[][],
  gridCounters: GridCounters,
  isMaximising: boolean
): Move {
  const moves: Move[] = [];
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
          grid.length as GridSize,
          rowIdx,
          colIdx,
          mark
        );

        // Create a move object
        const move: Move = { rowIdx, colIdx, score: 0 };

        // Check if the move makes a match and update score accordingly
        const gridState = checkForMatch(
          newGridCounters,
          grid.length as GridSize
        );
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
