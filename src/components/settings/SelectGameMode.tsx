import { selectGameMode } from "$/features/gameMode";
import { selectPlayers } from "$/features/players";
import useStore from "$/store";
import SelectOption from "./SelectOption";
import { Label, OptionsList } from "./styled";

export default function SelectGameMode() {
  const { gameMode, setGameMode } = useStore(selectGameMode);
  const { setPlayerType } = useStore(selectPlayers);
  const gridSize = useStore((store) => store.gridSize);
  const setGridSize = useStore((store) => store.setGridSize);

  const handlePvC = () => {
    setGameMode("PvC");
    setPlayerType("ai");
    setGridSize(3);
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
          disabled={[4, 5].includes(gridSize)}
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
