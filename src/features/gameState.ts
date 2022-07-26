import { StateCreatorWithMiddleware } from "$/utils/StateCreatorWithMiddleware";

type GameRunState = {
  isGameOver: false;
};

type GameEndState = {
  isGameOver: true;
  doesMatchExist: boolean;
};

export type GameState = GameRunState | GameEndState;

export interface GameStateSlice {
  gameState: GameState;
  drawGame: () => void;
  winGame: () => void;
  resetGameState: () => void;
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
  resetGameState() {
    set({ gameState: { isGameOver: false } });
  },
});

export default createGameStateSlice;
