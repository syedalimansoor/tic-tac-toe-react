import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.orange[100]};
  color: ${({ theme }) => theme.colors.orange[300]};
  padding: 0.8em;
  border: none;
  border-radius: 10px;
  font-weight: ${({ theme }) => theme.font.weight.bold};

  box-shadow: 0 8px 0 ${({ theme }) => theme.colors.orange[200]};
  transform: translateY(-8px);
  transition: 200ms ease;
  cursor: pointer;

  &:hover {
    box-shadow: 0 8px 0 ${({ theme }) => theme.colors.orange[200]},
      0 8px 15px ${({ theme }) => theme.colors.orange[200]};
  }

  &:active {
    transition: 50ms ease;
    box-shadow: 0 0 0 ${({ theme }) => theme.colors.orange[200]},
      0 8px 15px ${({ theme }) => theme.colors.orange[200]};
    transform: translateY(0);
  }
`;

export default function PlayButton() {
  const navigate = useNavigate();
  return (
    <Button onClick={() => navigate("/game")}>Let the games begin!</Button>
  );
}
