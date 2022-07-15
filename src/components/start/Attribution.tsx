import styled from "styled-components";

const Text = styled.p`
  grid-row: 3;
  align-self: end;
  color: ${({ theme }) => theme.colors.orange[200]};
  font-weight: ${({ theme }) => theme.font.weight.medium};
  transition: font-size 200ms ease;

  @media (min-width: ${({ theme }) => theme.breakpoints.medium}) {
    font-size: 1.5rem;
  }
`;

const Link = styled.a`
  color: ${({ theme }) => theme.colors.orange[200]};
  transition: color 200ms ease;

  &:hover {
    color: ${({ theme }) => theme.colors.orange[100]};
  }
`;

export default function Attribution() {
  return (
    <Text>
      Made by{" "}
      <Link href="https://www.instagram.com/alimansoor.dev" target={"_blank"}>
        Syed Ali Mansoor
      </Link>
    </Text>
  );
}
