import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const { user } = useSelector((state) => state.user);
  if (!user) return <Navigate to="/landing"></Navigate>;
  return children;
}

export default ProtectedRoute;
