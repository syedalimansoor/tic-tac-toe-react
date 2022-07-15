import PlayerNameField from "./PlayerNameField";
import { FieldsList, Label } from "./styled";

export default function EnterPlayerNames() {
  return (
    <>
      <Label>Player names:</Label>
      <FieldsList>
        <PlayerNameField />
        <PlayerNameField />
      </FieldsList>
    </>
  );
}
