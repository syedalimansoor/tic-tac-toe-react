import { selectPlayers } from "$/features/players";
import useStore from "$/store";
import styled from "styled-components";
import { isMobile, isDesktop } from "react-device-detect";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Button = styled.button`
  font-size: 1.3rem;
  background: transparent;
  border: none;
  color: ${({ theme }) => theme.colors.orange[100]};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  display: grid;
  place-items: center;
  position: relative;
  cursor: pointer;

  @media (min-width: ${({ theme }) => theme.breakpoints.medium}) {
    font-size: 1.6rem;
  }
`;

const MobileText = styled.span`
  font-size: 0.8rem;
  font-weight: ${({ theme }) => theme.font.weight.regular};
  display: block;
`;

const HoverText = styled(motion.span)`
  font-size: 0.8rem;
  position: absolute;
  width: max-content;
  background-color: ${({ theme }) => theme.colors.orange[300]};
  padding: 0.4em 2em;
  border-radius: 0.4em;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
`;

export default function Score() {
  const { players, resetScore } = useStore(selectPlayers);
  const [hover, setHover] = useState(false);

  return (
    <Button
      onClick={resetScore}
      title="Click to reset score"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {players[0].score} - {players[1].score}
      {isMobile && <MobileText>Tap to reset score</MobileText>}
      <AnimatePresence>
        {isDesktop && hover && (
          <HoverText
            initial={{ y: 0, opacity: 0 }}
            animate={{ y: -40, opacity: 1 }}
            exit={{ y: 0, opacity: 0, transition: { delay: 0.1 } }}
          >
            Click to reset score
          </HoverText>
        )}
      </AnimatePresence>
    </Button>
  );
}
