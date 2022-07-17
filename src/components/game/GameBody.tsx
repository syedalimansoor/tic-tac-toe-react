import styled from "styled-components";
import CurrentPlayer from "./CurrentPlayer";
import Grid from "./Grid";
import PlayerDisplay from "./PlayerDisplay";
import Score from "./Score";

const Wrapper = styled.main`
  padding: 1em;
  display: flex;
  justify-content: center;

  @media (min-width: ${({ theme }) => theme.breakpoints.medium}) {
    padding: 2em;
  }
`;
const Container = styled.div`
  width: min(100%, 25em);
  display: grid;
  justify-items: center;
`;

export default function GameBody() {
  return (
    <Wrapper>
      <Container>
        <Score />
        <Grid />
        <div>
          <PlayerDisplay />
          <PlayerDisplay />
        </div>
        <CurrentPlayer />
      </Container>
    </Wrapper>
  );
}
