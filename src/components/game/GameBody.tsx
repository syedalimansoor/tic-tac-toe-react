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
