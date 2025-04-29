import React, { useContext } from "react";
import { AuthContextApp } from "../context/AuthContext";

const useAuth = () => {
  const context = useContext(AuthContextApp);
  return context;
};

export default useAuth;
