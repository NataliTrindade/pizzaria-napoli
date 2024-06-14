import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.js";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme.js";
import GlobalStyles from "./styles/GlobalStyles.js";

const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
