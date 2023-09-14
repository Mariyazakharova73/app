import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./components/App";
import { someFn } from "./test";
import ThemeProvider from "./theme/ThemeProvider";

someFn();

const root = ReactDOM.createRoot(document.getElementById("root"));
const element = <h1>Hello, world</h1>;

root.render(
  <BrowserRouter>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </BrowserRouter>
);
