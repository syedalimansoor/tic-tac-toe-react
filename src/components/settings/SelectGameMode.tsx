import { selectGameMode } from "$/features/gameMode";
import { selectPlayers } from "$/features/players";
import useStore from "$/store";
import SelectOption from "./SelectOption";
import { Label, OptionsList } from "./styled";

export default function SelectGameMode() {
  const { gameMode, setGameMode } = useStore(selectGameMode);
  const { setPlayerType } = useStore(selectPlayers);

  const handlePvC = () => {
    setGameMode("PvC");
    setPlayerType("ai");
  };
  const handlePvP = () => {
    setGameMode("PvP");
    setPlayerType("human");
  };

  return (
    <>
      <Label>Game mode:</Label>
      <OptionsList>
        <SelectOption
          group="gameMode"
          value="PvC"
          checked={gameMode === "PvC"}
          onChange={handlePvC}
        />
        <SelectOption
          group="gameMode"
          value="PvP"
          checked={gameMode === "PvP"}
          onChange={handlePvP}
        />
      </OptionsList>
    </>
  );
}
