import { selectPlayers } from "$/features/players";
import useStore from "$/store";
import styled from "styled-components";
import PlayerNameField from "./PlayerNameField";
import { FieldsList, Label } from "./styled";

const StyledLabel = styled(Label)`
  @media (min-width: ${({ theme }) => theme.breakpoints.medium}) {
    align-self: start;
    margin-top: 1em;
  }
`;

export default function EnterPlayerNames() {
  const { players } = useStore(selectPlayers);

  return (
    <>
      <StyledLabel>Player names:</StyledLabel>
      <FieldsList>
        {players.map((player, idx) => (
          <PlayerNameField player={player} key={player.id} number={idx + 1} />
        ))}
      </FieldsList>
    </>
  );
}
