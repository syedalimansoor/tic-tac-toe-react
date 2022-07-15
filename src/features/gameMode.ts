import { RootState } from "$/store";
import { StateCreatorWithMiddleware } from ".";

export type GameMode = "PvC" | "PvP";

export interface GameModeSlice {
  gameMode: GameMode;
  setGameMode: (gameMode: GameMode) => void;
}

const createGameModeSlice: StateCreatorWithMiddleware<GameModeSlice> = (
  set
) => ({
  gameMode: "PvC",
  setGameMode: (gameMode) => set({ gameMode }),
});

export default createGameModeSlice;

export const selectGameMode = (store: RootState) => {
  const { gameMode, setGameMode } = store;
  return { gameMode, setGameMode };
};
