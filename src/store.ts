import create from "zustand";
import { devtools } from "zustand/middleware";
import { StateCreatorWithMiddleware } from "./utils/StateCreatorWithMiddleware";
import createGameModeSlice, { GameModeSlice } from "./features/gameMode";
import createGridSlice, { GridSlice } from "./features/grid";
import createPlayersSlice, { Mark, PlayersSlice } from "./features/players";
import createMovesSlice, { MovesSlice } from "./features/moves";
import createGameStateSlice, { GameStateSlice } from "./features/gameState";
import checkForMatch from "./utils/checkForMatch";

export interface RootState
  extends GameModeSlice,
    GridSlice,
    PlayersSlice,
    MovesSlice,
    GameStateSlice {
  handleGridCellClick: (rowIdx: number, colIdx: number, newMark: Mark) => void;
  resetGame: () => void;
}

const applyMiddleware = (f: StateCreatorWithMiddleware<RootState>) =>
  devtools(f);

const useStore = create<RootState>()(
  applyMiddleware((...args) => ({
    ...createGameModeSlice(...args),
    ...createGridSlice(...args),
    ...createPlayersSlice(...args),
    ...createMovesSlice(...args),
    ...createGameStateSlice(...args),

    handleGridCellClick(rowIdx, colIdx, newMark) {
      const set = args[0];
      const get = args[1];
      const grid = get().grid;
      const gameState = get().gameState;

      // Terminate if:
      // - Given cell is already marked
      if (grid[rowIdx][colIdx].mark) return;
      // - Game is over
      if (gameState.isGameOver) return;

      get().markGrid(rowIdx, colIdx, newMark);
      get().incrementMoves();
      get().updateGridCounters(rowIdx, colIdx, newMark);

      // Check if there have been enough moves to make a match
      const gridSize = get().gridSize;
      const numMoves = get().numMoves;
      if (numMoves >= gridSize * 2 - 1) {
        const gridCounters = get().gridCounters;
        const matchDetails = checkForMatch(gridCounters, gridSize);

        // Check if current counter values result in a match
        if (matchDetails.doesMatchExist) {
          set({ gameState: { isGameOver: true, doesMatchExist: true } });
          get().matchGrid(matchDetails);
        } else if (numMoves === gridSize ** 2) {
          set({ gameState: { isGameOver: true, doesMatchExist: false } });
        } else {
          get().toggleCurrentPlayer();
        }
      } else {
        get().toggleCurrentPlayer();
      }
    },

    resetGame() {
      const get = args[1];
      get().resetGrid();
      get().resetGridCounters();
      get().resetMoves();
      get().resetGameState();
      get().setCurrentPlayer(0);
    },
  }))
);

export default useStore;
