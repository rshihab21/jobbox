import React, { useContext } from "react";
import { AuthContextApp } from "../context/AuthContext";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContextApp);
  const location = useLocation();
  if (user) {
    return children;
  }
  if (loading) {
    return <span className="loading loading-dots loading-lg"></span>;
  }
  return <Navigate to="/signin" state={location?.pathname} />;
};

export default PrivateRoute;
