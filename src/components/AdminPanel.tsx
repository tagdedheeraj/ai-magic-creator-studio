
import React, { useState } from 'react';
import { AdminAuthProvider, useAdminAuth } from '@/contexts/AdminAuthContext';
import AdminLogin from '@/components/admin/AdminLogin';
import AdminLayout from '@/components/admin/AdminLayout';
import AdminDashboard from '@/components/admin/AdminDashboard';
import CourseManagement from '@/components/admin/CourseManagement';
import VideoManagement from '@/components/admin/VideoManagement';
import UserAnalytics from '@/components/admin/UserAnalytics';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const AdminPanelContent: React.FC = () => {
  const { adminUser, loading } = useAdminAuth();
  const [activeTab, setActiveTab] = useState('dashboard');

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
          <p>Loading admin panel...</p>
        </div>
      </div>
    );
  }

  if (!adminUser) {
    return <AdminLogin />;
  }

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <AdminDashboard />;
      case 'courses':
        return <CourseManagement />;
      case 'videos':
        return <VideoManagement />;
      case 'users':
        return (
          <Card>
            <CardHeader>
              <CardTitle>User Management</CardTitle>
              <CardDescription>View and manage application users</CardDescription>
            </CardHeader>
            <CardContent>
              <p>User management feature coming soon...</p>
            </CardContent>
          </Card>
        );
      case 'analytics':
        return <UserAnalytics />;
      case 'settings':
        return (
          <Card>
            <CardHeader>
              <CardTitle>App Settings</CardTitle>
              <CardDescription>Configure application settings</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Settings management feature coming soon...</p>
            </CardContent>
          </Card>
        );
      default:
        return <AdminDashboard />;
    }
  };

  return (
    <AdminLayout activeTab={activeTab} onTabChange={setActiveTab}>
      {renderContent()}
    </AdminLayout>
  );
};

const AdminPanel: React.FC = () => {
  return (
    <AdminAuthProvider>
      <AdminPanelContent />
    </AdminAuthProvider>
  );
};

export default AdminPanel;
