import React from "react";
import palette from "./palette";
import "./Navbar.css";

interface NavBarProps {
  className?: string;
}

const NavBar: React.FC<NavBarProps> = (props) => {
  console.log({ props });
  return (
    <div
      className={props.className}
      style={{
        backgroundColor: palette.palette_white,
        color: palette.palette_black,
      }}
    >
      <div className="toolbar">
        <button>Home</button>
        <button>ChatBot</button>
        <button>I miei Brevetti</button>
        <button>FAQ</button>
        <button>Login</button>
      </div>
    </div>
  );
};

export default NavBar;
