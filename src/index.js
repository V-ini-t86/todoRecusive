import { StrictMode } from "react";
import ReactDOM from "react-dom";
import ListContext from "./TodoContext";
import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <ListContext>
      <App />
    </ListContext>
  </StrictMode>,
  rootElement
);
