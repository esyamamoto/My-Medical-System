// src/App.tsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../src/pages/Home';
import Login from './pages/Login';
import Unauthorized from '../src/pages/UnauthorizedPage';
import AdminPage from '../src/pages/Admin/adminPage';
import AuthGuard from '../src/routes/AuthGuard';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/unauthorized" element={<Unauthorized />} />
      <Route
        path="/admin"
        element={
          <AuthGuard allowedRoles={['admin']}>
            <AdminPage />
          </AuthGuard>
        }
      />
    </Routes>
  );
};

export default App;
