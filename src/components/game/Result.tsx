import useStore from "$/store";
import { motion } from "framer-motion";
import styled, { keyframes } from "styled-components";

const fadeInZoomOut = keyframes`
  from {opacity: 0; transform: scale(200%)}
  to {opacity: 1; transform: scale(100%)}
`;
const Container = styled(motion.div)`
  position: absolute;
  inset-inline: 0;
  padding: 2em 1em;
  box-shadow: ${({ theme }) =>
    `0px 0px 50px ${theme.colors.orange[300]}, 0px 0px 10px ${theme.colors.orange[400]}`};
  background-color: ${({ theme }) => theme.colors.orange[300]};
  color: ${({ theme }) => theme.colors.orange[100]};
  text-align: center;
  font-size: 1.8rem;

  animation: ${fadeInZoomOut} 0.5s cubic-bezier(0.22, 1, 0.36, 1);

  @media (min-width: ${({ theme }) => theme.breakpoints.medium}) {
    font-size: 2.2rem;
  }
`;

const PlayerName = styled.span`
  font-weight: ${({ theme }) => theme.font.weight.bold};
`;

export default function Result() {
  const players = useStore((store) => store.players);
  const currentPlayerIdx = useStore((store) => store.currentPlayerIdx);
  const currentPlayer = players[currentPlayerIdx];
  const gameState = useStore((store) => store.gameState);

  return (
    <Container>
      {gameState.isGameOver && gameState.doesMatchExist ? (
        <>
          <PlayerName>{currentPlayer.name || currentPlayer.mark}</PlayerName>{" "}
          takes the game!
        </>
      ) : (
        <>It's a draw!</>
      )}
    </Container>
  );
}
