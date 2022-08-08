import { GridCounters, GridSize } from "$/features/grid";
import { Mark } from "$/features/players";

export default function updateGridCountersAbstract(
  gridCounters: GridCounters,
  gridSize: GridSize,
  rowIdx: number,
  colIdx: number,
  mark: Mark
): GridCounters {
  if (rowIdx === colIdx) gridCounters.main[mark] += 1;
  if (rowIdx + colIdx === gridSize - 1) gridCounters.anti[mark] += 1;

  gridCounters.rows[rowIdx][mark] += 1;
  gridCounters.cols[colIdx][mark] += 1;
  return gridCounters;
}
