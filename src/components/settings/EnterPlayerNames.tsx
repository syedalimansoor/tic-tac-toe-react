import { selectPlayers } from "$/features/players";
import useStore from "$/store";
import PlayerNameField from "./PlayerNameField";
import { FieldsList, Label } from "./styled";

export default function EnterPlayerNames() {
  const { players } = useStore(selectPlayers);

  return (
    <>
      <Label>Player names:</Label>
      <FieldsList>
        {players.map((player, idx) => (
          <PlayerNameField player={player} key={player.id} number={idx + 1} />
        ))}
      </FieldsList>
    </>
  );
}
