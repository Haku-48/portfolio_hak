import Body from "./components/layout/Body.tsx";
import ReactDOM from "react-dom/client";
/* Importing style */
import "./style/index.css";
import "./style/hero.css";
import "./style/home.css";
import "./style/about.css";
import "./style/contact.css";
import "./style/projects.css";
import { StrictMode } from "react";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Body />
  </StrictMode>,
);
