import { Mark, Player } from "$/features/players";
import styled from "styled-components";

import xDesktop from "$/assets/x-desktop-blue.svg";
import oDesktop from "$/assets/o-desktop-blue.svg";
import xMobile from "$/assets/x-mobile-blue.svg";
import oMobile from "$/assets/o-mobile-blue.svg";

const background = {
  mobile: { X: xMobile, O: oMobile },
  desktop: { X: xDesktop, O: oDesktop },
};

interface Props {
  player: Player;
  className?: string;
}

const Display = styled.div<{ mark: Mark }>`
  font-size: 1.4rem;
  font-weight: ${({ theme }) => theme.font.weight.bold};
  aspect-ratio: 1;
  display: grid;
  place-items: center;
  background-image: url(${({ mark }) => background.mobile[mark]});
  background-size: cover;
  background-repeat: no-repeat;
  text-align: center;

  @media (min-width: ${({ theme }) => theme.breakpoints.medium}) {
    background-image: url(${({ mark }) => background.desktop[mark]});
  }
`;

export default function PlayerDisplay(props: Props) {
  return (
    <Display mark={props.player.mark} className={props.className}>
      {props.player.name || `Player ${props.player.mark}`}
    </Display>
  );
}
