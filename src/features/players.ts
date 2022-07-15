import { RootState } from "$/store";
import { v4 as uuid } from "uuid";
import { StateCreatorWithMiddleware } from ".";

export type PlayerType = "human" | "ai";
export type Mark = "X" | "O";

export interface Player {
  id: string;
  name: string;
  type: PlayerType;
  mark: Mark;
  score: number;
}

export interface PlayersSlice {
  players: [Player, Player];
  setPlayerName: (id: string, name: string) => void;
  setPlayerType: (id: string, type: PlayerType) => void;
}

const createPlayersSlice: StateCreatorWithMiddleware<PlayersSlice> = (
  set,
  get
) => ({
  players: [
    { id: uuid(), name: "", type: "human", mark: "X", score: 0 },
    { id: uuid(), name: "A.I.", type: "ai", mark: "O", score: 0 },
  ],
  setPlayerName(id, name) {
    const players = get().players;
    players.forEach((player) =>
      player.id === id ? (player.name = name) : null
    );
    set({ players });
  },
  setPlayerType(id, type) {
    const players = get().players;
    players.forEach((player) =>
      player.id === id ? (player.type = type) : null
    );
    set({ players });
  },
});

export default createPlayersSlice;

export const selectPlayers = (store: RootState) => {
  return {
    players: store.players,
    setPlayerName: store.setPlayerName,
    setPlayerType: store.setPlayerType,
  };
};