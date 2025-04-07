import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext"; // Import AuthContext
import { useNavigate } from "react-router-dom"; // Import useNavigate to handle redirection

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, loginWithGoogle } = useContext(AuthContext); // Use AuthContext to get login function
  const navigate = useNavigate(); // Initialize useNavigate for redirecting

  const handleLogin = async () => {
    try {
      await login(email, password); // Call the login function from context
      navigate("/"); // Redirect to homepage/dashboard after successful login
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await loginWithGoogle(); // Google login
      navigate("/"); // Redirect to homepage/dashboard after successful login
    } catch (error) {
      console.error("Google login error:", error);
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
    </div>
  );
};

export default Login;
