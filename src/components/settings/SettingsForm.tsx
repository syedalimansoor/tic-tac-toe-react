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
