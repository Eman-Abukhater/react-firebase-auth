import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext"; // Import AuthContext

function Home() {
  const { user, logout } = useContext(AuthContext);
  return (
    <div>
      {user ? (
        <div>
          <h1>Welcome, {user.displayName || user.email}</h1>
          <button onClick={logout}>Log Out</button>
        </div>
      ) : (
        <h1>Please log in</h1>
      )}
    </div>
  );
}

export default Home;
