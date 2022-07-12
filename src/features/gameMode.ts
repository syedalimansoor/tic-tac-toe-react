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
