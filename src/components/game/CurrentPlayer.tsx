import { PlayerIdx } from "$/features/players";
import useStore from "$/store";
import { motion, Transition } from "framer-motion";
import { useEffect } from "react";
import styled from "styled-components";

const Wrapper = styled.div<{ currentPlayerIdx: PlayerIdx }>`
  padding: 2px;
  border: 2px solid ${({ theme }) => theme.colors.orange[100]};
  border-radius: 99em;

  width: 40%;
  min-width: fit-content;
  display: flex;
  justify-content: ${({ currentPlayerIdx }) =>
    currentPlayerIdx === 0 ? "start" : "end"};

  @media (min-width: ${({ theme }) => theme.breakpoints.medium}) {
    grid-area: current;
    max-width: 8em;
  }
`;

const Slider = styled(motion.div)`
  background-color: ${({ theme }) => theme.colors.orange[100]};
  color: ${({ theme }) => theme.colors.orange[300]};
  font-weight: ${({ theme }) => theme.font.weight.medium};
  border-radius: 99em;
  padding: 0.2em 1.4em;
`;

const spring: Transition = {
  type: "spring",
  stiffness: 700,
  damping: 30,
};

const worker: Worker = new Worker("/minimax.js");

export default function CurrentPlayer() {
  const { currentPlayerIdx, players } = useStore(
    ({ currentPlayerIdx, players }) => ({
      currentPlayerIdx,
      players,
    })
  );
  const grid = useStore((store) => store.grid);
  const gridCounters = useStore((store) => store.gridCounters);
  const handleGridCellClick = useStore((store) => store.handleGridCellClick);

  const currentPlayer = players[currentPlayerIdx];

  useEffect(() => {
    worker.onmessage = (message) => {
      const { rowIdx, colIdx } = message.data;
      handleGridCellClick(rowIdx, colIdx, "O");
    };
  }, []);

  useEffect(() => {
    if (currentPlayer.type === "ai") {
      worker.postMessage([grid, gridCounters, true]);
    }
  }, [currentPlayer]);

  return (
    <Wrapper currentPlayerIdx={currentPlayerIdx}>
      <Slider layout transition={spring}>
        {players[currentPlayerIdx].name || players[currentPlayerIdx].mark}
      </Slider>
    </Wrapper>
  );
}
