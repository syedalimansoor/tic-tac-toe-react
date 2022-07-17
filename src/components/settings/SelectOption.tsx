import { ChangeEventHandler } from "react";
import styled from "styled-components";

interface Props {
  group: string;
  value: string;
  checked: boolean;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

const Wrapper = styled.label``;

const Radio = styled.input.attrs({ type: "radio" })``;

const Content = styled.span<{ checked: boolean }>`
  display: inline-block;
  width: 100%;
  background-color: ${({ checked, theme }) =>
    checked ? theme.colors.orange[100] : theme.colors.orange[300]};
  color: ${({ checked, theme }) =>
    checked ? theme.colors.orange[300] : theme.colors.orange[100]};
  text-align: center;
  font-weight: ${({ theme }) => theme.font.weight.bold};
  font-size: 0.9em;
  padding: 0.6em;
  border-radius: 0.3em;

  transition-property: color, background-color;
  transition-duration: 200ms;
  transition-timing-function: ease;
  cursor: pointer;

  &:hover {
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.3),
      0 0 5px ${({ theme }) => theme.colors.orange[300]};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.medium}) {
    font-size: 1.2rem;
  }

  ${Radio}:focus-within ~ & {
    outline: 2px solid ${({ theme }) => theme.colors.orange[100]};
    outline-offset: 2px;
  }
`;

export default function SelectOption(props: Props) {
  return (
    <Wrapper>
      <Radio
        checked={props.checked}
        onChange={props.onChange}
        name={props.group}
        value={props.value}
      />
      <Content checked={props.checked}>{props.value}</Content>
    </Wrapper>
  );
}
