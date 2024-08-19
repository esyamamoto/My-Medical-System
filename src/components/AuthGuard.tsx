import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

interface AuthGuardProps {
  children: React.ReactElement;
  allowedRoles: string[]; // Permissões permitidas
}

const AuthGuard: React.FC<AuthGuardProps> = ({ children, allowedRoles }) => {
  const { isAuthenticated, userRole } = useAuth(); // Obtém o estado de autenticação e o papel do usuário

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  if (!allowedRoles.includes(userRole)) {
    return <Navigate to="/unauthorized" />;
  }

  return children;
};

export default AuthGuard;
