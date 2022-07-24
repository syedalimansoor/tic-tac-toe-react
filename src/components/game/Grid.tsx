import { GridSize, selectGrid } from "$/features/grid";
import useStore from "$/store";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import GridCell from "./GridCell";

const StyledGrid = styled.div<{ size: GridSize }>`
  display: grid;
  grid-template: ${({ size }) =>
    `repeat(${size}, minmax(0, 1fr)) / repeat(${size}, minmax(0, 1fr))`};
  justify-self: stretch;
  aspect-ratio: 1;

  @media (min-width: ${({ theme }) => theme.breakpoints.medium}) {
    grid-area: grid;
    width: min(40vw, 30rem);
  }
`;

export default function Grid() {
  const navigate = useNavigate();
  const { grid, gridSize } = useStore(selectGrid);

  useEffect(() => {
    if (!grid.length) navigate("/settings");
  }, []);

  const updateCounters = useStore((store) => store.updateGridCounters);

  return (
    <StyledGrid size={gridSize}>
      {grid.map((row, rowIdx) =>
        row.map(({ mark, match, id }, colIdx) => (
          <GridCell
            key={id}
            rowIdx={rowIdx}
            colIdx={colIdx}
            mark={mark}
            match={match}
            updateCounters={updateCounters}
          />
        ))
      )}
    </StyledGrid>
  );
}
