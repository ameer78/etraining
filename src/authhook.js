import React from "react";
import { AuthContext } from "./App";

export const useAuth = () => {
    return React.useContext(AuthContext) || null;
};