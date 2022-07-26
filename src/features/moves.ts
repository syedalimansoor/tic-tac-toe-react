import { RootState } from "$/store";
import { StateCreatorWithMiddleware } from "$/utils/StateCreatorWithMiddleware";

export interface MovesSlice {
  numMoves: number;
  incrementMoves: () => void;
  resetMoves: () => void;
}

const createMovesSlice: StateCreatorWithMiddleware<MovesSlice> = (set) => ({
  numMoves: 0,
  incrementMoves() {
    set((state) => ({ numMoves: state.numMoves + 1 }));
  },
  resetMoves() {
    set({ numMoves: 0 });
  },
});

export default createMovesSlice;

export const selectMoves = ({
  numMoves,
  incrementMoves,
  resetMoves,
}: RootState) => {
  return { numMoves, incrementMoves, resetMoves };
};
