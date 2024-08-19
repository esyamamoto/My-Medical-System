import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AdminPage from '../pages/Admin/adminPage';
import DoctorPage from '../pages/DoctorPage';
import PatientPage from '../pages/PatientPage';
import LoginPage from '../pages/Login';
import UnauthorizedPage from '../pages/UnauthorizedPage';
import AuthGuard from '../components/AuthGuard';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/unauthorized" element={<UnauthorizedPage />} />
      
      <Route
        path="/admin"
        element={
          <AuthGuard allowedRoles={['admin']}>
            <AdminPage />
          </AuthGuard>
        }
      />
      <Route
        path="/doctor"
        element={
          <AuthGuard allowedRoles={['doctor']}>
            <DoctorPage />
          </AuthGuard>
        }
      />
      <Route
        path="/patient"
        element={
          <AuthGuard allowedRoles={['patient']}>
            <PatientPage />
          </AuthGuard>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
