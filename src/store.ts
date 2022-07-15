import create from "zustand";
import { devtools } from "zustand/middleware";
import { StateCreatorWithMiddleware } from "./features";
import createGameModeSlice, { GameModeSlice } from "./features/gameMode";
import createGridSizeSlice, { GridSizeSlice } from "./features/gridSize";
import createPlayersSlice, { PlayersSlice } from "./features/players";

export interface RootState extends GameModeSlice, GridSizeSlice, PlayersSlice {}

const applyMiddleware = (f: StateCreatorWithMiddleware<RootState>) =>
  devtools(f);

const useStore = create<RootState>()(
  applyMiddleware((...args) => ({
    ...createGameModeSlice(...args),
    ...createGridSizeSlice(...args),
    ...createPlayersSlice(...args),
  }))
);

export default useStore;
