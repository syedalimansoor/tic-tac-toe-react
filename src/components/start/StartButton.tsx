import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const buttonSize = { mobile: "180px", desktop: "250px" };
const Button = styled.button`
  grid-row: 2;
  background-color: ${({ theme }) => theme.colors.orange[100]};
  border: none;
  display: grid;
  place-content: center;
  border-radius: 99em;
  width: ${buttonSize.mobile};
  height: ${buttonSize.mobile};

  box-shadow: 0 15px 0 0 ${({ theme }) => theme.colors.orange[200]};
  transform: translateY(-15px);
  cursor: pointer;
  transition: 200ms ease;

  &:hover {
    box-shadow: 0 15px 0 0 ${({ theme }) => theme.colors.orange[200]},
      0 15px 15px 0 ${({ theme }) => theme.colors.orange[200]};
  }

  &:active {
    transition: 50ms ease;
    box-shadow: 0 0 15px 0 ${({ theme }) => theme.colors.orange[200]};
    transform: translateY(0);
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.medium}) {
    width: ${buttonSize.desktop};
    height: ${buttonSize.desktop};

    box-shadow: 0 20px 0 0 ${({ theme }) => theme.colors.orange[200]};
    transform: translateY(-20px);

    &:hover {
      box-shadow: 0 20px 0 0 ${({ theme }) => theme.colors.orange[200]},
        0 20px 15px 0 ${({ theme }) => theme.colors.orange[200]};
    }

    &:active {
      box-shadow: 0 0 0 0 ${({ theme }) => theme.colors.orange[200]},
        0 0 15px 0 ${({ theme }) => theme.colors.orange[200]};
    }
  }
`;

const Text = styled.span`
  width: min-content;
  color: ${({ theme }) => theme.colors.blue[200]};
  font-size: 2.2rem;
  font-weight: ${({ theme }) => theme.font.weight.bold};
  line-height: 0.9;
  text-align: left;
  transition: 200ms ease;

  @media (min-width: ${({ theme }) => theme.breakpoints.medium}) {
    font-size: 3rem;
  }
`;

export default function StartButton() {
  const navigate = useNavigate();

  return (
    <Button type="button" onClick={() => navigate("/settings")}>
      <Text>
        tic-
        <wbr />
        tac-
        <wbr />
        toe.
      </Text>
    </Button>
  );
}
