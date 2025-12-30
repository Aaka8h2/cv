import React from 'react';
import { useAdmin } from '../../contexts/AdminContext';
import AdminLogin from './AdminLogin';
import AdminDashboard from './AdminDashboard';

const AdminRoute: React.FC = () => {
  const { isAuthenticated } = useAdmin();

  return isAuthenticated ? <AdminDashboard /> : <AdminLogin />;
};

export default AdminRoute;