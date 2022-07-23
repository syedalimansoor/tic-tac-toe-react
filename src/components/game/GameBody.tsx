import { selectPlayers } from "$/features/players";
import useStore from "$/store";
import styled from "styled-components";
import CurrentPlayer from "./CurrentPlayer";
import Grid from "./Grid";
import PlayerDisplay from "./PlayerDisplay";
import Score from "./Score";

const Wrapper = styled.main`
  padding: 1.6rem;
  flex-grow: 1;
  display: flex;
  justify-content: center;

  @media (min-width: ${({ theme }) => theme.breakpoints.medium}) {
    padding: 2em;
  }
`;
const Container = styled.div`
  width: min(100%, 70em);
  display: grid;
  justify-items: center;
  align-items: center;
  row-gap: 1.6rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.medium}) {
    grid-template:
      ". score ." auto
      "player1 grid player2" auto
      ". current ." auto / 1fr auto 1fr;
    column-gap: 4em;
  }
`;

const PlayersContainer = styled.div`
  display: flex;
  width: min(100%, 20em);
  /* padding-inline: 1em; */
  justify-content: stretch;
  gap: 3em;
  & > * {
    flex: 1 0 0;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.medium}) {
    display: contents;
  }
`;
const Player1Display = styled(PlayerDisplay)`
  @media (min-width: ${({ theme }) => theme.breakpoints.medium}) {
    justify-self: stretch;
    grid-area: player1;
  }
`;
const Player2Display = styled(PlayerDisplay)`
  @media (min-width: ${({ theme }) => theme.breakpoints.medium}) {
    justify-self: stretch;
    grid-area: player2;
  }
`;

export default function GameBody() {
  const { players } = useStore(selectPlayers);

  return (
    <Wrapper>
      <Container>
        <Score />
        <Grid />
        <PlayersContainer>
          <Player1Display player={players[0]} />
          <Player2Display player={players[1]} />
        </PlayersContainer>
        <CurrentPlayer />
      </Container>
    </Wrapper>
  );
}
