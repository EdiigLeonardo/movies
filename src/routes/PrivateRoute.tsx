import { useAuth } from "@clerk/clerk-react";
import React from "react";
import { Navigate } from "react-router-dom";

export const PrivateRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isSignedIn } = useAuth();

  return isSignedIn ? <>{children}</> : <Navigate to="/" replace />;
};


export default PrivateRoute;
