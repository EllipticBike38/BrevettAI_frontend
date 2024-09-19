import { Link, useNavigate } from "react-router-dom";
import "./AuthPage.css";
import { useState } from "react";
import { login, register } from "../services/auth";

export function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const nav = useNavigate();
  return (
    <div className="authPage">
    
    <form className="form" action="/" method="GET" onSubmit={(e) => {
      e.preventDefault();
      if (isLogin) {
        login({ username, password });
        nav("/");
      } else {
        register({ username, password, email });
      }
    }
    }>
    
      <h1>{isLogin ? "Accedi" : "Registrati"}</h1>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      {!isLogin && (
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      )}
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button 
        
      >
        {isLogin ? "Accedi" : "Registrati"}
      </button>
      <p onClick={() => setIsLogin(!isLogin)}>
        {isLogin ? "Non hai un account? Registrati" : "Hai già un account? Accedi"}
      </p>
      
      </form>
    </div>
  );
}
