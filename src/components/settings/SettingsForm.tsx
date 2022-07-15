import { selectGameMode } from "$/features/gameMode";
import useStore from "$/store";
import styled from "styled-components";
import EnterPlayerNames from "./EnterPlayerNames";
import SelectGameMode from "./SelectGameMode";
import SelectGridSize from "./SelectGridSize";

const Form = styled.form`
  border: 4px solid ${({ theme }) => theme.colors.blue[100]};
  border-radius: 10px;
  padding: 1em;

  display: grid;
  gap: 0.5em;

  width: min(100%, 25em);

  @media (min-width: ${({ theme }) => theme.breakpoints.medium}) {
    grid-template-rows: repeat(3, auto);
    grid-template-columns: auto 1fr;
    gap: 2em;
    align-items: center;
    padding: 2em;
    width: min(100%, 30em);
  }
`;

export default function SettingsForm() {
  return (
    <Form>
      <SelectGameMode />
      <SelectGridSize />
      <EnterPlayerNames />
    </Form>
  );
}
