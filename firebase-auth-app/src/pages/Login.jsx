import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext"; // Import AuthContext

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, loginWithGoogle } = useContext(AuthContext); // Use AuthContext to get login function

  const handleLogin = async () => {
    try {
      await login(email, password); // Call the login function from context
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await loginWithGoogle(); // Google login
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
