import { RootState } from "$/store";
import { MatchDetails } from "$/utils/checkForMatch";
import { StateCreatorWithMiddleware } from "$/utils/StateCreatorWithMiddleware";
import updateGridCountersAbstract from "$/utils/updateGridCounters";
import { v4 as uuid } from "uuid";
import { Mark } from "./players";

export type GridSize = 3 | 4 | 5;

export interface GridCell {
  id: string;
  mark: Mark | null;
  match: boolean;
}

export interface MarkCounter {
  X: number;
  O: number;
}

export interface GridCounters {
  main: MarkCounter;
  anti: MarkCounter;
  rows: MarkCounter[];
  cols: MarkCounter[];
}

export interface GridSlice {
  gridSize: GridSize;
  setGridSize: (gridSize: GridSize) => void;

  grid: GridCell[][];
  resetGrid: () => void;
  markGrid: (rowIdx: number, colIdx: number, mark: Mark) => void;
  matchGrid: (matchDetails: MatchDetails) => void;

  gridCounters: GridCounters;
  resetGridCounters: () => void;
  updateGridCounters: (rowIdx: number, colIdx: number, mark: Mark) => void;
}

const createGridSlice: StateCreatorWithMiddleware<GridSlice> = (set, get) => ({
  gridSize: 3,
  setGridSize(gridSize) {
    set({ gridSize });
  },

  grid: [],

  resetGrid() {
    const gridSize = get().gridSize;
    const grid = Array.from({ length: gridSize }, () =>
      Array.from(
        { length: gridSize },
        () => ({ mark: null, match: false, id: uuid() } as GridCell)
      )
    );
    set({ grid });
  },

  markGrid(rowIdx, colIdx, mark) {
    const grid = get().grid;
    if (!grid[rowIdx][colIdx].mark) grid[rowIdx][colIdx].mark = mark;
    set({ grid });
  },

  matchGrid(matchDetails) {
    const grid = get().grid;
    const gridSize = get().gridSize;

    for (let rowIdx = 0; rowIdx < grid.length; rowIdx++) {
      let row = grid[rowIdx];
      if (matchDetails.rowIdx !== undefined && rowIdx > matchDetails.rowIdx)
        break;

      for (let colIdx = 0; colIdx < row.length; colIdx++) {
        if (matchDetails.colIdx !== undefined && colIdx > matchDetails.colIdx)
          break;

        let cell = row[colIdx];
        if (matchDetails.main) {
          if (rowIdx === colIdx) cell.match = true;
        } else if (matchDetails.anti) {
          if (rowIdx + colIdx === gridSize - 1) cell.match = true;
        } else if (matchDetails.rowIdx !== undefined) {
          if (rowIdx === matchDetails.rowIdx) cell.match = true;
        } else if (matchDetails.colIdx !== undefined) {
          if (colIdx === matchDetails.colIdx) cell.match = true;
        }
      }
    }

    set({ grid });
  },

  gridCounters: {
    main: { X: 0, O: 0 },
    anti: { X: 0, O: 0 },
    rows: [],
    cols: [],
  },

  resetGridCounters() {
    const gridSize = get().gridSize;
    set({
      gridCounters: {
        main: { X: 0, O: 0 },
        anti: { X: 0, O: 0 },
        rows: Array.from({ length: gridSize }, () => ({ X: 0, O: 0 })),
        cols: Array.from({ length: gridSize }, () => ({ X: 0, O: 0 })),
      },
    });
  },

  updateGridCounters(rowIdx, colIdx, mark) {
    const gridCounters = get().gridCounters;
    const gridSize = get().gridSize;

    updateGridCountersAbstract(gridCounters, gridSize, rowIdx, colIdx, mark);
  },
});

export default createGridSlice;

export const selectGrid = (store: RootState) => {
  const { gridSize, setGridSize, grid, resetGrid } = store;
  return { gridSize, setGridSize, grid, resetGrid };
};
