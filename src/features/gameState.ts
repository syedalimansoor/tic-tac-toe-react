import { StateCreatorWithMiddleware } from "$/utils/StateCreatorWithMiddleware";

export interface MatchLocation {
  row?: number;
  col?: number;
  main?: boolean;
  anti?: boolean;
}

export interface GameState extends MatchLocation {
  end: boolean;
  match: boolean;
}

export interface GameStateSlice {
  gameState: GameState;
  drawGame: () => void;
  winGame: (matchLocation: MatchLocation) => void;
}

const createGameStateSlice: StateCreatorWithMiddleware<GameStateSlice> = (
  set
) => ({
  gameState: { end: false, match: false },
  drawGame() {
    set({ gameState: { end: true, match: false } });
  },
  winGame(matchLocation) {
    set({ gameState: { end: true, match: true, ...matchLocation } });
  },
});

export default createGameStateSlice;
