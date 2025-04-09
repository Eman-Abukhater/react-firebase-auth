import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebase"; // your Firebase config
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  signInWithPopup,
} from "firebase/auth";
import { googleProvider, githubProvider } from "../firebase"; // Include the GitHub provider here

const AuthContext = createContext(); // Create a context for authentication to keep track of user state

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Track login status using Firebase's onAuthStateChanged
  useEffect(() => {
    const unsub = auth.onAuthStateChanged((user) => {
      setUser(user); // When authentication state changes, update the state
    });

    // Cleanup listener when the component unmounts
    return () => unsub();
  }, []); // Empty dependency array: run only on mount and cleanup on unmount

  // Authentication functions
  const signup = (email, password) =>
    createUserWithEmailAndPassword(auth, email, password);
  const login = (email, password) =>
    signInWithEmailAndPassword(auth, email, password);
  const loginWithGoogle = () => signInWithPopup(auth, googleProvider);
  
  // Add GitHub login function
  const loginWithGitHub = () => signInWithPopup(auth, githubProvider);

  const logout = () => signOut(auth);

  // Pass authentication data to context consumers
  const value = { user, signup, login, loginWithGoogle, loginWithGitHub, logout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
export { AuthContext };
