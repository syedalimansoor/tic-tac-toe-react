import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const buttonSize = "180px";
const Button = styled.button`
  grid-row: 2;
  background-color: ${({ theme }) => theme.colors.orange[100]};
  border: none;
  display: grid;
  place-content: center;
  border-radius: 99em;
  width: ${buttonSize};
  height: ${buttonSize};

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
`;

const Text = styled.span`
  width: min-content;
  color: ${({ theme }) => theme.colors.blue[200]};
  font-size: 2rem;
  font-weight: ${({ theme }) => theme.font.weight.bold};
  line-height: 1;
  text-align: left;
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
