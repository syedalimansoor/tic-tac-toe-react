import { ChangeEventHandler } from "react";
import styled from "styled-components";

interface Props {
  group: string;
  value: string;
  checked: boolean;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

const Wrapper = styled.label``;

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

  transition: 200ms ease;
  cursor: pointer;
`;

const Radio = styled.input.attrs({ type: "radio" })``;

export default function SelectOption(props: Props) {
  return (
    <Wrapper>
      <Content checked={props.checked}>{props.value}</Content>
      <Radio
        checked={props.checked}
        onChange={props.onChange}
        name={props.group}
        value={props.value}
      />
    </Wrapper>
  );
}
