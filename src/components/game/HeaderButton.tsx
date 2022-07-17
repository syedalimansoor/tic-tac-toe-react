import { MouseEventHandler } from "react";
import { ReactSVG } from "react-svg";
import styled from "styled-components";

interface Props {
  src: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  highlight?: boolean;
}

const Button = styled.button<{ highlight?: boolean }>`
  background-color: ${({ theme, highlight }) =>
    highlight ? theme.colors.orange[100] : "transparent"};
  border: 2px solid ${({ theme }) => theme.colors.orange[100]};
  border-radius: 99em;
  padding: 0.2em;
  width: 2em;
  height: 2em;
  display: grid;
  place-items: center;

  outline: none;
  transition-property: background-color, box-shadow;
  transition-duration: 200ms;
  transition-timing-function: ease;
  cursor: pointer;
  &:hover,
  &:focus-visible {
    box-shadow: 0 0 10px ${({ theme }) => theme.colors.orange[100]};
  }
  &:active {
    transition-duration: 50ms;
    background-color: ${({ theme }) => theme.colors.orange[100]};
    path {
      transition-duration: 50ms;
      fill: ${({ theme }) => theme.colors.orange[300]};
    }
  }
`;
const Image = styled(ReactSVG)<{ highlight?: boolean }>`
  display: contents;
  & span {
    display: contents;
  }
  & svg {
    width: 1.2em;
    height: 1.2em;
  }
  & path {
    fill: ${({ theme, highlight }) =>
      highlight ? theme.colors.orange[300] : theme.colors.orange[100]};
    transition: fill 200ms ease;
  }
`;

export default function HeaderButton(props: Props) {
  return (
    <Button onClick={props.onClick} type="button" highlight={props.highlight}>
      <Image src={props.src} wrapper="span" highlight={props.highlight} />
    </Button>
  );
}
