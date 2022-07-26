import xMark from "$/assets/x-mark.svg";
import oMark from "$/assets/o-mark.svg";
const mark = { X: xMark, O: oMark };

import { GridSize } from "$/features/grid";
import { Mark } from "$/features/players";
import useStore from "$/store";
import styled, { keyframes } from "styled-components";
import { ReactSVG } from "react-svg";

interface Props {
  rowIdx: number;
  colIdx: number;
  mark: Mark | null;
  match: boolean;
  updateCounters: (rowIdx: number, colIdx: number, mark: Mark) => void;
}

const StyledCell = styled.button<{ size: GridSize }>`
  background: transparent;
  border: none;
  padding: 0.8em;

  :not(:nth-of-type(${({ size }) => size}n)) {
    border-right: 3px solid ${({ theme }) => theme.colors.orange[100]};
  }
  :not(:nth-last-of-type(-n + ${({ size }) => size})) {
    border-bottom: 3px solid ${({ theme }) => theme.colors.orange[100]};
  }

  :not(:disabled) {
    cursor: pointer;
  }

  transition: background 200ms ease;
  &:hover:not(:disabled) {
    background-color: ${({ theme }) => theme.colors.orange[300]};
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  } to {
    opacity: 1;
  }
`;

const StyledSVG = styled(ReactSVG)`
  svg {
    width: 100%;
    height: 100%;
    animation: ${fadeIn} 200ms ease;
  }
`;

export default function GridCell(props: Props) {
  const gridSize = useStore((store) => store.gridSize);

  const handleClick = () => {};

  return (
    <StyledCell size={gridSize} onClick={handleClick} disabled={!!props.mark}>
      {props.mark && <StyledSVG src={mark[props.mark]} />}
    </StyledCell>
  );
}
