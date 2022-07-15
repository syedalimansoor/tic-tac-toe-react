import styled from "styled-components";

const Label = styled.label`
  display: block;
  font-size: 0.8rem;
  font-weight: ${({ theme }) => theme.font.weight.medium};
  margin-bottom: 0.5em;
`;

const Field = styled.input`
  background-color: transparent;
  color: ${({ theme }) => theme.colors.orange[100]};
  border: 2px solid ${({ theme }) => theme.colors.orange[100]};
  border-radius: 0.3em;
  width: 100%;
  padding: 0.5em;
  font-weight: ${({ theme }) => theme.font.weight.medium};
`;

export default function PlayerNameField() {
  return (
    <div>
      <Label>Player 1 - X</Label>
      <Field />
    </div>
  );
}
