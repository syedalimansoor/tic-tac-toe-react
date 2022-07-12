import create from "zustand/react";
import createGameModeSlice, { GameModeSlice } from "./features/gameMode";
import { devtools } from "zustand/middleware";
import { StateCreatorWithMiddleware } from "./features";

export interface RootState extends GameModeSlice {}

const applyMiddleware = (f: StateCreatorWithMiddleware<RootState>) =>
  devtools(f);

const useStore = create<RootState>()(
  applyMiddleware((...args) => ({
    ...createGameModeSlice(...args),
  }))
);
