import { GridCounters, GridSize, MarkCounter } from "$/features/grid";
import { Mark } from "$/features/players";

export interface MatchDetails {
  doesMatchExist: boolean;
  rowIdx?: number;
  colIdx?: number;
  main?: boolean;
  anti?: boolean;
  mark?: Mark;
}

function checkCounter(counter: MarkCounter, gridSize: GridSize): Mark | false {
  if (counter.O === gridSize) return "O";
  if (counter.X === gridSize) return "X";
  return false;
}

export default function checkForMatch(
  gridCounters: GridCounters,
  gridSize: GridSize
): MatchDetails {
  const { main, anti, rows, cols } = gridCounters;

  let result: Mark | false;
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
