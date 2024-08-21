// src/components/AuthGuard.tsx
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

interface AuthGuardProps {
  allowedRoles: string[]; // Lista de papéis permitidos para a rota
  children: JSX.Element;
}

const AuthGuard: React.FC<AuthGuardProps> = ({ allowedRoles, children }) => {
  const { isAuthenticated, userRole } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  if (!allowedRoles.includes(userRole)) {
    return <Navigate to="/unauthorized" />;
  }

  return children;
};

export default AuthGuard;
