import { RootState } from "$/store";
import { StateCreatorWithMiddleware } from ".";

export type GridSize = 3 | 4 | 5;

export interface GridSizeSlice {
  gridSize: GridSize;
  setGridSize: (gridSize: GridSize) => void;
}

const createGridSizeSlice: StateCreatorWithMiddleware<GridSizeSlice> = (
  set
) => ({
  gridSize: 3,
  setGridSize: (gridSize) => set({ gridSize: gridSize }),
});

export default createGridSizeSlice;

export const selectGridSize = (store: RootState) => {
  const { gridSize, setGridSize } = store;
  return { gridSize, setGridSize };
};
