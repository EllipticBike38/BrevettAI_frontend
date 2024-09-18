import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "./App.css";
import NavBar from "./components/NavBar.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div className="grid-container">
      <h1 className="title">[logo]</h1>
      <NavBar className="navbar"></NavBar>
    </div>
  </StrictMode>
);
