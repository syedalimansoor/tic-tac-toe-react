import { RootState } from "$/store";
import { StateCreatorWithMiddleware } from "$/utils/StateCreatorWithMiddleware";

export interface MovesSlice {
  moves: number;
  incrementMoves: () => void;
  resetMoves: () => void;
}

const createMovesSlice: StateCreatorWithMiddleware<MovesSlice> = (set) => ({
  moves: 0,
  incrementMoves() {
    set((state) => ({ moves: state.moves + 1 }));
  },
  resetMoves() {
    set({ moves: 0 });
  },
});

export default createMovesSlice;

export const selectMoves = ({
  moves,
  incrementMoves,
  resetMoves,
}: RootState) => {
  return { moves, incrementMoves, resetMoves };
};
