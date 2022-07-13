import { Link } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";
import pageTransition from "$/utils/pageTransition";

import oDesktop from "$/assets/o-desktop-orange.svg";
import xDesktop from "$/assets/x-desktop-orange.svg";
import oMobile from "$/assets/o-mobile-orange.svg";
import xMobile from "$/assets/x-mobile-orange.svg";

import Attribution from "$/components/start/Attribution";
import StartButton from "$/components/start/StartButton";

const Container = styled(motion.div)`
  height: 100%;
  display: grid;
  place-items: center;
  grid-template-rows: 1fr auto 1fr;
  background-image: url(${xMobile}), url(${oMobile});
  background-repeat: no-repeat;
  /* background-position: top calc(-100px + 10vw) left calc(-100px + 10vw),
    top calc(-100px + 10vw) right calc(-100px + 10vw); */
  background-position: top -50px left -50px, top -50px right -50px;
  padding-block: 3rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.medium}) {
    background-image: url(${xDesktop}), url(${oDesktop});
    background-position: top -200px left -200px, bottom -200px right -200px;
  }
`;

export default function Start() {
  return (
    <Container {...pageTransition}>
      <StartButton />
      <Attribution />
    </Container>
  );
}
