import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext"; // Import AuthContext
import { useNavigate } from "react-router-dom"; // Import useNavigate for redirection

function Signup() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { signup } = useContext(AuthContext); // Use AuthContext to get signup function
    const navigate = useNavigate(); // Use useNavigate to redirect after signup
    // Handle signup
    const handleSignup = async () => {
        try {
            await signup(email, password); // Call the signup function from context
            navigate("/login"); // go to login after signing up

        } catch (error) {
            console.error("Error signing up:", error);
        }
    };
  return (
    <div>
        <h2>Signup</h2>
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
      <button onClick={handleSignup}>Sign Up</button>
      </div>
  )
}

export default Signup