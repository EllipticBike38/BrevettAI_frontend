import { createBrowserRouter, useNavigate } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import ChatBotPage from "./pages/ChatBotPage";
import React, { useState, useMemo, useEffect } from "react";

import { Outlet } from "react-router-dom";
import logo from "./assets/logo.png";

import NavBar from "./components/NavBar";
import BrevettiPage from "./pages/BrevettiPage";
import { AuthPage } from "./pages/AuthPage";

export const ApiContext = React.createContext({token: "", setToken: (token: string) => {}}); // creo un context con token e setToken
// in un'altra scheda chiamo il context con useContext(ApiContext) e posso accedere al token

export const Root = () => {
  const [token, setToken] = useState<string>("");
  


  const nav = useNavigate();
  useEffect(() => {

  const cookies = document.cookie.split(";");
  const cookieToken = cookies.find((cookie) => cookie.includes("token"))?.split("=")[1];
  setToken(cookieToken || "");
  if (!cookieToken && 
    !window.location.pathname.includes("auth") && 
    window.location.pathname !== "/") {
  
    nav("/auth");
  }
  }, );



  return (
    <ApiContext.Provider value={{token, setToken}}>
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
      {
        path: "/patents",
        element: <BrevettiPage />,
      },
      {
        path: "/auth",
        element: <AuthPage />,
      },
    ],
  },
]);

export default router;
