import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  :root {
    color: ${({ theme }) => theme.colors.orange[100]};
    font-family: ${({ theme }) => theme.font.family};
    font-size: ${({ theme }) => theme.font.size.mobile};
    font-weight: ${({ theme }) => theme.font.weight.regular}
  }

  html, body, #root {
    height: 100%;
  }

  body {
    background-color: ${({ theme }) => theme.colors.blue[200]}
  }

  #root {
    display: grid;
    place-content: stretch;
    grid-template-areas: "stack";

    & > * {
      grid-area: stack;
    }
  }

  img {
    max-width: 100%;
  }

  input, button, textarea {
    font: inherit;
    appearance: none;
  }

  `;

export default GlobalStyles;
