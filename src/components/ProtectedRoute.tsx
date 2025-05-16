import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import type { RootState } from '../redux/store';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { token, isAuthenticated, user } = useSelector((state: RootState) => state.auth);
  const location = useLocation();

  if (!isAuthenticated || !token || user?.role !== 'admin') {
    // Redirect to login page but save the attempted location
    return <Navigate to="/admin/login" state={{ from: location }} replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute; 