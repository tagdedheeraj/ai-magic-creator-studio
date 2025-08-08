
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { supabase } from '@/integrations/supabase/client';

interface AdminUser {
  id: string;
  email: string;
  name: string;
  role: string;
  is_active: boolean;
  last_login?: string;
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
      console.log('Attempting admin login for:', email);
      
      // Use the new security definer function for authentication
      const { data, error } = await supabase.rpc('authenticate_admin', {
        email_input: email,
        password_input: password
      });

      console.log('Authentication result:', { data, error });

      if (error) {
        console.error('Admin login error:', error);
        return false;
      }

      if (data && data.length > 0) {
        const userData = data[0];
        setAdminUser(userData);
        localStorage.setItem('admin_user', JSON.stringify(userData));
        
        // Update last login using the secure function
        await supabase.rpc('update_admin_last_login', {
          admin_id: userData.id
        });
        
        console.log('Admin login successful');
        return true;
      }
      
      console.log('No matching admin user found');
      return false;
    } catch (error) {
      console.error('Login error:', error);
      return false;
    }
  };

  const logout = async () => {
    console.log('Admin logout');
    setAdminUser(null);
    localStorage.removeItem('admin_user');
  };

  const checkAuth = async () => {
    setLoading(true);
    try {
      const savedUser = localStorage.getItem('admin_user');
      if (savedUser) {
        const userData = JSON.parse(savedUser);
        console.log('Checking saved admin user:', userData.email);
        
        // Verify user still exists and is active
        const { data, error } = await supabase
          .from('admin_users')
          .select('id, email, name, role, is_active, last_login')
          .eq('id', userData.id)
          .eq('is_active', true)
          .single();

        if (data && !error) {
          console.log('Admin user verified');
          setAdminUser(data);
        } else {
          console.log('Admin user verification failed:', error);
          localStorage.removeItem('admin_user');
          setAdminUser(null);
        }
      }
    } catch (error) {
      console.error('Auth check error:', error);
      localStorage.removeItem('admin_user');
      setAdminUser(null);
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
