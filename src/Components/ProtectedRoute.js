import React, { useEffect } from "react";
import { Route, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../authhook";

const ProtectedRoute = ({children}) => {
  const { token } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    if (!token) {
      console.log(token);
      navigate("/");
    }
  }, [token]);

  return children;
};


export default ProtectedRoute;
