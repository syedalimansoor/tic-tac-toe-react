import styled from "styled-components";
import Logo from "$/components/misc/Logo";

import resetIcon from "$/assets/icon-reset.svg";
import settingsIcon from "$/assets/icon-settings.svg";
import HeaderButton from "./HeaderButton";
import { useNavigate } from "react-router-dom";

const Wrapper = styled.header`
  border-bottom: 4px solid ${({ theme }) => theme.colors.blue[100]};
  padding: 1rem 1.6rem;
  display: flex;
  justify-content: center;
`;
const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: min(100%, 25em);

  @media (min-width: ${({ theme }) => theme.breakpoints.medium}) {
    width: min(100%, 70em);
  }
`;
const StyledLogo = styled(Logo)`
  font-size: 1.3rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.medium}) {
    font-size: 1.6rem;
  }
`;

const ButtonsWrapper = styled.div`
  display: flex;
  gap: 1em;
  align-items: center;
`;

export default function GameHeader() {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <StyledHeader>
        <StyledLogo />
        <ButtonsWrapper>
          <HeaderButton src={resetIcon} />
          <HeaderButton
            src={settingsIcon}
            onClick={() => navigate("/settings")}
          />
        </ButtonsWrapper>
      </StyledHeader>
    </Wrapper>
  );
}
