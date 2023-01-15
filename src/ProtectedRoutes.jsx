import React from 'react'
import { Navigate,Route } from 'react-router-dom'
export function PrivateRoute({children}) {
  const token = localStorage.getItem("token");
  if (!token) {
    return <Navigate to="/login" replace />
  }
  return children;
}
export const PublicRoute = (props) => {
  const token = localStorage.getItem("token");
  // console.log(token);
  return token ? (
    <Navigate to={{ pathname: "/" }} />
  ) : (
    <Route {...props} />
  );
};