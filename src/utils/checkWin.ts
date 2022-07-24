import { GridCounters, GridSize, MarkCounter } from "$/features/grid";

function checkCounter(counter: MarkCounter, gridSize: GridSize) {
  return counter.O === gridSize || counter.X === gridSize;
}

export default function checkWin(
  gridCounters: GridCounters,
  gridSize: GridSize
): boolean {
  const { main, anti, rows, cols } = gridCounters;

  if (checkCounter(main, gridSize) || checkCounter(anti, gridSize)) return true;

  for (let counter of rows) {
    if (checkCounter(counter, gridSize)) return true;
  }

  for (let counter of cols) {
    if (checkCounter(counter, gridSize)) return true;
  }

  return false;
}
