
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { supabase } from '@/integrations/supabase/client';

interface AdminUser {
  id: string;
  email: string;
  name: string;
  role: string;
  is_active: boolean;
}

interface AdminAuthContextType {
  adminUser: AdminUser | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => Promise<void>;
  checkAuth: () => Promise<void>;
}

const AdminAuthContext = createContext<AdminAuthContextType | undefined>(undefined);

export const useAdminAuth = () => {
  const context = useContext(AdminAuthContext);
  if (context === undefined) {
    throw new Error('useAdminAuth must be used within an AdminAuthProvider');
  }
  return context;
};

interface AdminAuthProviderProps {
  children: ReactNode;
}

export const AdminAuthProvider: React.FC<AdminAuthProviderProps> = ({ children }) => {
  const [adminUser, setAdminUser] = useState<AdminUser | null>(null);
  const [loading, setLoading] = useState(true);

  const login = async (email: string, password: string): Promise<boolean> => {
    try {
      // For demo purposes, using simple email/password check
      // In production, you'd want proper password hashing
      const { data, error } = await supabase
        .from('admin_users')
        .select('*')
        .eq('email', email)
        .eq('is_active', true)
        .single();

      if (error || !data) {
        console.error('Admin login error:', error);
        return false;
      }

      // Simple password check (in production use proper hashing)
      if (password === 'admin123') {
        setAdminUser(data);
        localStorage.setItem('admin_user', JSON.stringify(data));
        
        // Update last login
        await supabase
          .from('admin_users')
          .update({ last_login: new Date().toISOString() })
          .eq('id', data.id);
        
        return true;
      }
      
      return false;
    } catch (error) {
      console.error('Login error:', error);
      return false;
    }
  };

  const logout = async () => {
    setAdminUser(null);
    localStorage.removeItem('admin_user');
  };

  const checkAuth = async () => {
    setLoading(true);
    try {
      const savedUser = localStorage.getItem('admin_user');
      if (savedUser) {
        const userData = JSON.parse(savedUser);
        
        // Verify user still exists and is active
        const { data, error } = await supabase
          .from('admin_users')
          .select('*')
          .eq('id', userData.id)
          .eq('is_active', true)
          .single();

        if (data && !error) {
          setAdminUser(data);
        } else {
          localStorage.removeItem('admin_user');
        }
      }
    } catch (error) {
      console.error('Auth check error:', error);
      localStorage.removeItem('admin_user');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    checkAuth();
  }, []);

  return (
    <AdminAuthContext.Provider value={{ adminUser, loading, login, logout, checkAuth }}>
      {children}
    </AdminAuthContext.Provider>
  );
};
