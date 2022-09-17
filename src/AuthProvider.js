import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "./App";

const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
//   const location = useLocation();
  const [token, setToken] = React.useState(null);

  const  handleLogin = async () => {
    const accessToken = await fakeAuth();
    console.log(accessToken);
    setToken(accessToken);
    navigate('/dashboard');
  };
  const handleLogout = () => {
    setToken(null);
  };

  return (
    <AuthContext.Provider
      value={{
        token,
        handleLogin,
        handleLogout,
      }}
    > {children}
    </AuthContext.Provider>
  );
};

const fakeAuth = async () => {
  return setTimeout(() => {
    return "token";
  }, 1000);
};


export default AuthProvider;