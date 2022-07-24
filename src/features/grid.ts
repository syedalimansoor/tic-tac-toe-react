import { RootState } from "$/store";
import { StateCreatorWithMiddleware } from "$/utils/StateCreatorWithMiddleware";
import { v4 as uuid } from "uuid";
import { Mark } from "./players";

export type GridSize = 3 | 4 | 5;

export interface GridCell {
  id: string;
  mark: Mark | null;
  match: boolean;
}

export interface GridSlice {
  gridSize: GridSize;
  setGridSize: (gridSize: GridSize) => void;

  grid: GridCell[][];
  resetGrid: () => void;
  markGrid: (rowIdx: number, colIdx: number, mark: Mark) => void;
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
});

export default createGridSlice;

export const selectGrid = (store: RootState) => {
  const { gridSize, setGridSize, grid, resetGrid } = store;
  return { gridSize, setGridSize, grid, resetGrid };
};
