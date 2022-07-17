import pageTransition from "$/utils/pageTransition";
import { motion } from "framer-motion";
import styled from "styled-components";
import GameHeader from "$/components/game/GameHeader";
import GameBody from "$/components/game/GameBody";

const Wrapper = styled(motion.div)``;

export default function Game() {
  return (
    <Wrapper {...pageTransition}>
      <GameHeader />
      <GameBody />
    </Wrapper>
  );
}
