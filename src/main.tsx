import React from "react";
import ReactDOM from "react-dom/client";
import theme from "./style/theme";
import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";
import GlobalStyles from "./style/global";
import AnimatedRoutes from "./utils/AnimatedRoutes";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <AnimatedRoutes />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
