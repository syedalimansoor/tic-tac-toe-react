import { RootState } from "$/store";
import { v4 as uuid } from "uuid";
import { StateCreatorWithMiddleware } from "$/utils/StateCreatorWithMiddleware";

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
  setPlayerType: (type: PlayerType) => void;
  resetScore: () => void;
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

  setPlayerType(type) {
    const players = get().players;
    players[1].type = type;
    switch (type) {
      case "ai":
        players[1].name = "A.I.";
        break;
      case "human":
        players[1].name = "";
        break;
    }
    set({ players });
  },

  resetScore() {
    const players = get().players;
    players.forEach((player) => (player.score = 0));
    set({ players });
  },
});

export default createPlayersSlice;

export const selectPlayers = ({
  players,
  setPlayerName,
  setPlayerType,
  resetScore,
}: RootState) => {
  return { players, setPlayerName, setPlayerType, resetScore };
};
