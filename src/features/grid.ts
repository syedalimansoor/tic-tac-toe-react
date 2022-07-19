import { RootState } from "$/store";
import { StateCreatorWithMiddleware } from "$/utils/StateCreatorWithMiddleware";

export type GridSize = 3 | 4 | 5;

export interface GridSlice {
  gridSize: GridSize;
  setGridSize: (gridSize: GridSize) => void;
}

const createGridSlice: StateCreatorWithMiddleware<GridSlice> = (set) => ({
  gridSize: 3,
  setGridSize: (gridSize) => set({ gridSize: gridSize }),
});

export default createGridSlice;

export const selectGridSize = (store: RootState) => {
  const { gridSize, setGridSize } = store;
  return { gridSize, setGridSize };
};
