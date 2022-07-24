import { GridSize } from "$/features/grid";
import useStore from "$/store";
import styled from "styled-components";

const StyledCell = styled.button<{ size: GridSize }>`
  background: transparent;
  border: none;
  cursor: pointer;
  :not(:nth-of-type(${({ size }) => size}n)) {
    border-right: 3px solid ${({ theme }) => theme.colors.orange[100]};
  }

  :not(:nth-last-of-type(-n + ${({ size }) => size})) {
    border-bottom: 3px solid ${({ theme }) => theme.colors.orange[100]};
  }
`;

export default function GridCell() {
  const gridSize = useStore((store) => store.gridSize);

  return <StyledCell size={gridSize} />;
}
