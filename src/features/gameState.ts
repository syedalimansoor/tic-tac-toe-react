import { StateCreatorWithMiddleware } from "$/utils/StateCreatorWithMiddleware";

export interface GameState {
  isGameOver: boolean;
  doesMatchExist: boolean;
}

export interface GameStateSlice {
  gameState: GameState;
  drawGame: () => void;
  winGame: () => void;
}

const createGameStateSlice: StateCreatorWithMiddleware<GameStateSlice> = (
  set
) => ({
  gameState: { isGameOver: false, doesMatchExist: false },
  drawGame() {
    set({ gameState: { isGameOver: true, doesMatchExist: false } });
  },
  winGame() {
    set({ gameState: { isGameOver: true, doesMatchExist: true } });
  },
});

export default createGameStateSlice;
