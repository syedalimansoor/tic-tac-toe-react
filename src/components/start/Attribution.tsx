import styled from "styled-components";

const Text = styled.p`
  grid-row: 3;
  align-self: end;
  color: ${({ theme }) => theme.colors.orange[200]};
  font-weight: ${({ theme }) => theme.font.weight.medium};
`;

export default function Attribution() {
  return <Text>Made by Syed Ali Mansoor</Text>;
}
