import { selectPlayers } from "$/features/players";
import useStore from "$/store";
import styled from "styled-components";
import CurrentPlayer from "./CurrentPlayer";
import Grid from "./Grid";
import PlayerDisplay from "./PlayerDisplay";
import Score from "./Score";

const Wrapper = styled.main`
  padding: 1em;
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
  align-content: space-between;
`;

const PlayersContainer = styled.div`
  display: flex;
  width: min(100%, 20em);
  padding-inline: 1em;
  justify-content: stretch;
  gap: 3em;
  & > * {
    flex: 1 0 0;
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
          <PlayerDisplay player={players[0]} />
          <PlayerDisplay player={players[1]} />
        </PlayersContainer>
        <CurrentPlayer />
      </Container>
    </Wrapper>
  );
}
