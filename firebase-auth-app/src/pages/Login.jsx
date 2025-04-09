import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, loginWithGoogle, loginWithGitHub } = useContext(AuthContext);
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

  const handleGitHubLogin = async () => {
    try {
      // Perform GitHub login via Firebase
      const result = await loginWithGitHub();
      navigate("/home"); // Redirect to home after successful linking
      const user = result.user;
      const credential = result.credential; // GitHub credential
      console.log(user.providerData);

      // Check if the user is already logged in with a different provider (Google)
      if (user && user.providerData[0].providerId === 'google.com') {
        // Link GitHub account to the existing Google account
        await linkWithCredential(user, credential);
        console.log("GitHub account linked to existing Google account!");
        navigate("/home"); // Redirect to home after successful linking
      }
    } catch (error) {
      
      console.error("GitHub login error:", error.message);
      
      if (error.code === 'auth/account-exists-with-different-credential') {
        const existingEmail = error.email;  // Get the email from the error
        if (existingEmail) {
          // If email is available, alert the user
          alert(`This email (${existingEmail}) is already associated with a different provider. Please link your accounts.`);
        } else {
          // If email is not available, provide a generic message
          alert("This account is already associated with another provider. Please link your accounts.");
        }
      } else {
        alert("Login failed: " + error.message);
      }
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
      <button onClick={handleGitHubLogin}>Login with GitHub</button>
      <p>Don't have an account? <Link to="/signup">Sign up here</Link></p>
    </div>
  );
};

export default Login;
