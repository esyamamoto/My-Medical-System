import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Navbar: React.FC = () => {
  const { isAuthenticated, userRole } = useAuth();

  // Função para renderizar os links baseados no papel do usuário
  const renderLinks = () => {
    if (!isAuthenticated) {
      return (
        <>
          <li><Link to="/login">Login</Link></li>
        </>
      );
    }

    switch (userRole) {
      case 'admin':
        return (
          <>
            <li><Link to="/admin">Admin</Link></li>
            <li><Link to="/doctor">Doctor</Link></li>
            <li><Link to="/patient">Patient</Link></li>
          </>
        );
      case 'doctor':
        return (
          <>
            <li><Link to="/doctor">Doctor Dashboard</Link></li>
            <li><Link to="/patient">Patient List</Link></li>
          </>
        );
      case 'patient':
        return (
          <>
            <li><Link to="/patient">Patient Dashboard</Link></li>
            <li><Link to="/appointments">My Appointments</Link></li>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <nav>
      <ul>
        {renderLinks()}
      </ul>
    </nav>
  );
};

export default Navbar;
