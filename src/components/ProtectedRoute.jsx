import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return <div className="w3-center w3-padding">Loading...</div>;
  }

  if (!user) {
    return <Navigate to="/auth/login" />;
  }

  return children;
};

export default ProtectedRoute;