import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext"; // Import AuthContext
import { Link } from "react-router-dom"; // Import Link from react-router-dom for navigation

function Navbar() {
  const { user, logout } = useContext(AuthContext); // Use AuthContext to get user and logout function
  // Check if user is logged in
  return (
    <nav>
      <h1>Firebase Auth App</h1>
      {user ? (
        <div>
          <p>
            Welcome, {user.displayName} {user.email}
          </p>
          <button onClick={logout}>Log Out</button>
        </div>
      ) : (
        // If user is not logged in, show login link
        <>
          <p>Please log in</p>
          <Link to="/login">Login</Link> {/* Link to Login page */}
        </>
      )}
    </nav>
  );
}

export default Navbar;
