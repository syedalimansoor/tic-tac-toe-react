import pageTransition from "$/utils/pageTransition";
import { motion } from "framer-motion";
import styled from "styled-components";

import xMobile from "$/assets/x-mobile-blue.svg";
import xDesktop from "$/assets/x-desktop-blue.svg";
import oMobile from "$/assets/o-mobile-blue.svg";
import oDesktop from "$/assets/o-desktop-blue.svg";

import Logo from "$/components/misc/Logo";
import SettingsForm from "$/components/settings/SettingsForm";
import PlayButton from "$/components/settings/PlayButton";

const Container = styled(motion.div)`
  height: 100%;
  background-image: url(${xMobile}), url(${oMobile});
  background-repeat: no-repeat;
  background-position: top -50px left -50px, top -50px right -50px;

  @media (min-width: ${({ theme }) => theme.breakpoints.medium}) {
    background-image: url(${xDesktop}), url(${oDesktop});
    background-position: top -200px left -200px, bottom -200px right -200px;
  }

  padding: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  gap: 3rem;
`;

export default function Settings() {
  return (
    <Container {...pageTransition}>
      <Logo />
      <SettingsForm />
      <PlayButton />
    </Container>
  );
}
