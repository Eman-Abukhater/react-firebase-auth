import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, loginWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      await login(email, password);
      navigate("/home");
    } catch (error) {
      if (error.code === "auth/user-not-found") {
        alert("User not found. Please sign up first.");
      } else {
        alert("Login failed: " + error.message);
      }
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await loginWithGoogle();
      navigate("/home");
    } catch (error) {
      console.error("Google login error:", error.message);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleGoogleLogin}>Login with Google</button>
      <p>Don't have an account? <Link to="/signup">Sign up here</Link></p>
    </div>
  );
};

export default Login;
