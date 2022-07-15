import { v4 as uuid } from "uuid";
import { StateCreatorWithMiddleware } from ".";

export type PlayerType = "human" | "ai";

export interface Player {
  id: string;
  name: string;
  type: PlayerType;
  score: number;
}

export interface PlayersSlice {
  players: [Player, Player];
  setName: (id: string, name: string) => void;
}

const createPlayersSlice: StateCreatorWithMiddleware<PlayersSlice> = (
  set,
  get
) => ({
  players: [
    { id: uuid(), name: "", type: "human", score: 0 },
    { id: uuid(), name: "A.I.", type: "ai", score: 0 },
  ],
  setName(id, name) {
    const players = get().players;
    players.forEach((player) =>
      player.id === id ? (player.name = name) : null
    );
    set({ players });
  },
});

export default createPlayersSlice;
