import create from "zustand";
import { devtools } from "zustand/middleware";
import { StateCreatorWithMiddleware } from "./utils/StateCreatorWithMiddleware";
import createGameModeSlice, { GameModeSlice } from "./features/gameMode";
import createGridSlice, { GridSlice } from "./features/grid";
import createPlayersSlice, { PlayersSlice } from "./features/players";

export interface RootState extends GameModeSlice, GridSlice, PlayersSlice {}

const applyMiddleware = (f: StateCreatorWithMiddleware<RootState>) =>
  devtools(f);

const useStore = create<RootState>()(
  applyMiddleware((...args) => ({
    ...createGameModeSlice(...args),
    ...createGridSlice(...args),
    ...createPlayersSlice(...args),
  }))
);

export default useStore;
