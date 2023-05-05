import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );
  // const baseUrl = process.env.REACT_APP_BASE_URL;
  const login = async (inputs) => {
    const res = await fetch(`http://localhost:8800/api/auth/login`, {
      method: "POST",
      credentials: "include",
      body: JSON.stringify(inputs),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();

    return data;
  };

  const logout = async (inputs) => {
    const res = await fetch(`http://localhost:8800/api/auth/logout`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    });
    localStorage.removeItem("user");
    window.location.reload();
    //setCurrentUser(null);
  };

  useEffect(() => {
    if (currentUser) {
      localStorage.setItem("user", JSON.stringify(currentUser));
    }
    // console.log('this is test');
    // console.log(localStorage.getItem("user"));
  }, [currentUser]);

  const authData = { currentUser, setCurrentUser, login, logout };

  return (
    <AuthContext.Provider value={authData}>{children}</AuthContext.Provider>
  );
};
