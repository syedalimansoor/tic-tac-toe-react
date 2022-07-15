import styled from "styled-components";

interface Props {
  className?: string;
}

const Text = styled.h1`
  text-align: center;
`;

export default function Logo(props: Props) {
  return <Text className={props.className}>tic-tac-toe.</Text>;
}
