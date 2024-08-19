// src/layouts/AdminLayout.tsx

import React, { ReactNode } from 'react';
import Navbar from '../components/Navbar';

interface AdminLayoutProps {
  children: ReactNode; // Adiciona a tipagem para `children`
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
    </div>
  );
};

export default AdminLayout;
