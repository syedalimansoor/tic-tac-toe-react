import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    margin: 0;
    padding: 0;
  }
  
  :root {
    font-family: ${({ theme }) => theme.font.family};
    font-size: ${({ theme }) => theme.font.size.mobile};
    font-weight: ${({ theme }) => theme.font.weight.regular}
  }

  `;

export default GlobalStyles;
