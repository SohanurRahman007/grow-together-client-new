import React, { createContext, useState } from "react";
import App from "../App";

export const AuthContext = createContext();
// const auth = getAuth(App);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const authInfo = {
    user,
    setUser,
  };
  return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthProvider;
