import { StrictMode } from "react";
import "./App.css";
import Router from "./Router";
import { RouterProvider } from "react-router-dom";

function App() {
  return (
    <StrictMode>
      <RouterProvider router={Router} />
    </StrictMode>
  );
}

export default App;
