import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import GlobalStyle from "./style/globalStyle";
import App from "./App";
import store from "./store";
import { ThemeProvider } from "styled-components";
import theme from "../src/style/theme";

ReactDOM.createRoot(document.getElementById("root")).render(
  
    <BrowserRouter>
      <Provider store={store}>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
        <App />
        </ThemeProvider>
      </Provider>
    </BrowserRouter>
 
);
