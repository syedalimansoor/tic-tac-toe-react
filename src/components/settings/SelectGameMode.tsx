import { selectGameMode } from "$/features/gameMode";
import useStore from "$/store";
import SelectOption from "./SelectOption";
import { Label, OptionsList } from "./styled";

export default function SelectGameMode() {
  const { gameMode, setGameMode } = useStore(selectGameMode);

  return (
    <>
      <Label>Game mode:</Label>
      <OptionsList>
        <SelectOption
          group="gameMode"
          value="PvC"
          checked={gameMode === "PvC"}
          onChange={() => setGameMode("PvC")}
        />
        <SelectOption
          group="gameMode"
          value="PvP"
          checked={gameMode === "PvP"}
          onChange={() => setGameMode("PvP")}
        />
      </OptionsList>
    </>
  );
}
