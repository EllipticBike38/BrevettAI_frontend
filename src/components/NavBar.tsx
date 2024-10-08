import React, { useContext } from "react";
import palette from "./palette";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";
import { ApiContext } from "../Router";

interface NavBarProps {
  className?: string;
}

const NavBar: React.FC<NavBarProps> = (props) => {
  console.log({ props });
  const {token, setToken} = useContext(ApiContext);

  const navigate = useNavigate();

  return (
    
    <div
      className={props.className}
      style={{
        backgroundColor: palette.palette_white,
        color: palette.palette_black,
      }}
    >
      <div className="toolbar">
        <button onClick={() => navigate("/")}>Home</button>
        <button onClick={() => navigate("/chat")}>ChatBot</button>
        <button onClick={() => navigate("/patents")}>I miei Brevetti</button>
        <button onClick={() => navigate("/faq")}>FAQ</button>
        {!token ? <button onClick={() => navigate("/auth")}>Login</button>:
        <button onClick={() => 
          {
            setToken("");
            document.cookie = "token=";
            navigate("/auth");
          }
        }>Logout</button>}
      </div>
    </div>
  );
};

export default NavBar;
