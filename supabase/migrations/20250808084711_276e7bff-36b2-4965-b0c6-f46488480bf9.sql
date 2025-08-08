
-- Enable pgcrypto extension for password hashing
CREATE EXTENSION IF NOT EXISTS pgcrypto;

-- Create security definer function for admin authentication
CREATE OR REPLACE FUNCTION public.authenticate_admin(email_input text, password_input text)
RETURNS TABLE(id uuid, email text, name text, role text, is_active boolean, last_login timestamp with time zone)
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
  RETURN QUERY
  SELECT a.id, a.email, a.name, a.role, a.is_active, a.last_login
  FROM public.admin_users a
  WHERE a.email = email_input 
    AND a.is_active = true
    AND a.password_hash = crypt(password_input, a.password_hash);
END;
$$;

-- Create function to create admin users with proper password hashing
CREATE OR REPLACE FUNCTION public.create_admin_user(
  email_input text,
  password_input text,
  name_input text,
  role_input text DEFAULT 'content_manager'
)
RETURNS uuid
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
  user_id uuid;
BEGIN
  INSERT INTO public.admin_users (email, password_hash, name, role)
  VALUES (email_input, crypt(password_input, gen_salt('bf')), name_input, role_input)
  RETURNING id INTO user_id;
  
  RETURN user_id;
END;
$$;

-- Create function to update last login
CREATE OR REPLACE FUNCTION public.update_admin_last_login(admin_id uuid)
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
  UPDATE public.admin_users 
  SET last_login = now() 
  WHERE id = admin_id AND is_active = true;
END;
$$;

-- Drop existing problematic RLS policy
DROP POLICY IF EXISTS "Admin users can manage admin_users" ON public.admin_users;

-- Create new RLS policies that avoid circular references
CREATE POLICY "Allow admin authentication" ON public.admin_users
  FOR SELECT USING (true);

CREATE POLICY "Authenticated admins can update own record" ON public.admin_users  
  FOR UPDATE USING (id = (current_setting('app.current_admin_id', true))::uuid);

-- Create default admin user with proper password hash
DO $$
BEGIN
  -- Delete existing admin user if exists
  DELETE FROM public.admin_users WHERE email = 'admin@aitoolshindi.com';
  
  -- Create new admin user with hashed password
  PERFORM public.create_admin_user(
    'admin@aitoolshindi.com',
    'admin123',
    'Super Admin',
    'super_admin'
  );
END;
$$;
