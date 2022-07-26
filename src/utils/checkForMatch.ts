import { GridCounters, GridSize, MarkCounter } from "$/features/grid";

export interface MatchDetails {
  doesMatchExist: boolean;
  rowIdx?: number;
  colIdx?: number;
  main?: boolean;
  anti?: boolean;
}

function checkCounter(counter: MarkCounter, gridSize: GridSize) {
  return counter.O === gridSize || counter.X === gridSize;
}

export default function checkForMatch(
  gridCounters: GridCounters,
  gridSize: GridSize
): MatchDetails {
  const { main, anti, rows, cols } = gridCounters;

  if (checkCounter(main, gridSize)) return { doesMatchExist: true, main: true };
  if (checkCounter(anti, gridSize)) return { doesMatchExist: true, anti: true };

  for (let rowIdx = 0; rowIdx < rows.length; rowIdx++) {
    if (checkCounter(rows[rowIdx], gridSize))
      return { doesMatchExist: true, rowIdx };
  }

  for (let colIdx = 0; colIdx < cols.length; colIdx++) {
    if (checkCounter(cols[colIdx], gridSize))
      return { doesMatchExist: true, colIdx };
  }

  return { doesMatchExist: false };
}
