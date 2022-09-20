import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Route, useLocation, useNavigate } from "react-router-dom";

const ProtectedRoute = ({children}) => {
  const { isLoggedIn} = useSelector((state) => state.auth);

  const navigate = useNavigate();
  useEffect(() => {
    if (!isLoggedIn) {
      console.log(isLoggedIn);
      navigate("/");
    }
  }, [isLoggedIn]);

  return children;
};


export default ProtectedRoute;
