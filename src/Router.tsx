import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import ChatBotPage from "./pages/ChatBotPage";
import React, { useState, useMemo } from "react";
import { Navigate, Outlet } from "react-router-dom";
import logo from "./assets/logo.png";

import NavBar from "./components/NavBar";

export const ApiContext = React.createContext({});

export const Root = () => {
  const [token, setToken] = useState<string>("");

  const value = useMemo(() => ({}), []);

  // if (!token) {
  //   return <Navigate to="/403" replace />;
  // }

  return (
    <ApiContext.Provider value={value}>
      <div className="grid-container">
        <div className="title">
          <img src={logo} alt="logo" className="logo" />
        </div>

        <NavBar className="navbar"></NavBar>
      </div>
      <Outlet />
    </ApiContext.Provider>
  );
};

const router = createBrowserRouter([
  {
    element: <Root />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/chat",
        element: <ChatBotPage />,
      },
    ],
  },
]);

export default router;
