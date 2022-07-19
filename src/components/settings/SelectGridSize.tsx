import { selectGrid } from "$/features/grid";
import useStore from "$/store";
import SelectOption from "./SelectOption";
import { Label, OptionsList } from "./styled";

export default function SelectGridSize() {
  const { gridSize, setGridSize } = useStore(selectGrid);

  return (
    <>
      <Label>Grid size:</Label>
      <OptionsList>
        <SelectOption
          group="gridSize"
          value="3"
          checked={gridSize === 3}
          onChange={() => setGridSize(3)}
        />
        <SelectOption
          group="gridSize"
          value="4"
          checked={gridSize === 4}
          onChange={() => setGridSize(4)}
        />
        <SelectOption
          group="gridSize"
          value="5"
          checked={gridSize === 5}
          onChange={() => setGridSize(5)}
        />
      </OptionsList>
    </>
  );
}
