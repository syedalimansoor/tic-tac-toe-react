import { Player, selectPlayers } from "$/features/players";
import useStore from "$/store";
import { ChangeEventHandler } from "react";
import styled from "styled-components";

interface Props {
  player: Player;
  number: number;
}

const Label = styled.label`
  display: block;
  font-size: 0.8rem;
  font-weight: ${({ theme }) => theme.font.weight.medium};
  margin-bottom: 0.5em;

  @media (min-width: ${({ theme }) => theme.breakpoints.medium}) {
    font-size: 1rem;
  }
`;

const Field = styled.input`
  background-color: transparent;
  color: ${({ theme }) => theme.colors.orange[100]};
  border: 2px solid ${({ theme }) => theme.colors.orange[100]};
  border-radius: 0.3em;
  width: 100%;
  padding: 0.5em;
  font-weight: ${({ theme }) => theme.font.weight.medium};
  outline: none;

  @media (min-width: ${({ theme }) => theme.breakpoints.medium}) {
    font-size: 1.2rem;
  }
`;

export default function PlayerNameField(props: Props) {
  const { setPlayerName } = useStore(selectPlayers);

  const handleChange: ChangeEventHandler<HTMLInputElement> = (evt) =>
    setPlayerName(props.player.id, evt.target.value);

  return (
    <div>
      <Label htmlFor={props.player.id}>
        Player {props.number} - {props.player.mark}
      </Label>
      <Field
        id={props.player.id}
        onChange={handleChange}
        value={props.player.name}
        disabled={props.player.type === "ai"}
      />
    </div>
  );
}
