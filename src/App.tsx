// src/components/AuthGuard.tsx
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './context/AuthContext';

interface AuthGuardProps {
  children: JSX.Element;
  allowedRoles: string[]; // Adicione a prop allowedRoles aqui
}

const AuthGuard: React.FC<AuthGuardProps> = ({ children, allowedRoles }) => {
  const { isAuthenticated, userRole } = useAuth();

  if (!isAuthenticated || !allowedRoles.includes(userRole)) {
    return <Navigate to="/unauthorized" />;
  }

  return children;
};

export default AuthGuard;
