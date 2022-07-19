import { RootState } from "$/store";
import { StateCreatorWithMiddleware } from "$/utils/StateCreatorWithMiddleware";
import { Mark } from "./players";

export type GridSize = 3 | 4 | 5;

export interface GridCell {
  mark: Mark | null;
  match: boolean;
}

export interface GridSlice {
  gridSize: GridSize;
  setGridSize: (gridSize: GridSize) => void;

  grid: GridCell[][];
  resetGrid: () => void;
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
        () => ({ mark: null, match: false } as GridCell)
      )
    );
    set({ grid });
  },
});

export default createGridSlice;

export const selectGrid = (store: RootState) => {
  const { gridSize, setGridSize, grid, resetGrid } = store;
  return { gridSize, setGridSize, grid, resetGrid };
};
