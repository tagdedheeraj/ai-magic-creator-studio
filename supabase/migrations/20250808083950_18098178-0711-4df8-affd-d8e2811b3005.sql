
-- Create admin users table
CREATE TABLE public.admin_users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT UNIQUE NOT NULL,
  password_hash TEXT NOT NULL,
  name TEXT NOT NULL,
  role TEXT NOT NULL DEFAULT 'content_manager' CHECK (role IN ('super_admin', 'content_manager', 'analytics_viewer')),
  is_active BOOLEAN DEFAULT true,
  last_login TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Create courses table
CREATE TABLE public.courses (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  duration TEXT NOT NULL,
  lessons INTEGER NOT NULL DEFAULT 0,
  difficulty TEXT NOT NULL CHECK (difficulty IN ('Beginner', 'Intermediate', 'Advanced')),
  students TEXT DEFAULT '0',
  type TEXT NOT NULL,
  color TEXT NOT NULL,
  icon_name TEXT,
  is_featured BOOLEAN DEFAULT false,
  is_active BOOLEAN DEFAULT true,
  order_index INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Create course videos table
CREATE TABLE public.course_videos (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  course_id UUID REFERENCES public.courses(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  duration TEXT NOT NULL,
  youtube_id TEXT,
  order_index INTEGER DEFAULT 0,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Create app settings table
CREATE TABLE public.app_settings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  key TEXT UNIQUE NOT NULL,
  value JSONB NOT NULL,
  description TEXT,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Create user analytics table
CREATE TABLE public.user_analytics (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID,
  event_type TEXT NOT NULL,
  event_data JSONB,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Create content categories table
CREATE TABLE public.content_categories (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT UNIQUE NOT NULL,
  description TEXT,
  icon_name TEXT,
  color TEXT,
  is_active BOOLEAN DEFAULT true,
  order_index INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Enable RLS on all tables
ALTER TABLE public.admin_users ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.courses ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.course_videos ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.app_settings ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_analytics ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.content_categories ENABLE ROW LEVEL SECURITY;

-- Create RLS policies for admin access
CREATE POLICY "Admin users can manage admin_users" ON public.admin_users
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM public.admin_users 
      WHERE id = auth.uid()::uuid AND role = 'super_admin' AND is_active = true
    )
  );

CREATE POLICY "Admins can manage courses" ON public.courses
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM public.admin_users 
      WHERE id = auth.uid()::uuid AND is_active = true
    )
  );

CREATE POLICY "Admins can manage course videos" ON public.course_videos
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM public.admin_users 
      WHERE id = auth.uid()::uuid AND is_active = true
    )
  );

CREATE POLICY "Admins can manage app settings" ON public.app_settings
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM public.admin_users 
      WHERE id = auth.uid()::uuid AND is_active = true
    )
  );

CREATE POLICY "Admins can view user analytics" ON public.user_analytics
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM public.admin_users 
      WHERE id = auth.uid()::uuid AND is_active = true
    )
  );

CREATE POLICY "Admins can manage content categories" ON public.content_categories
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM public.admin_users 
      WHERE id = auth.uid()::uuid AND is_active = true
    )
  );

-- Insert default admin user (password: admin123)
INSERT INTO public.admin_users (email, password_hash, name, role) VALUES 
('admin@aitoolshindi.com', '$2a$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'Super Admin', 'super_admin');

-- Insert default app settings
INSERT INTO public.app_settings (key, value, description) VALUES 
('app_name', '"AI Tools Hindi"', 'Application name'),
('app_description', '"Learn AI tools in Hindi language"', 'Application description'),
('banner_ad_unit_id', '"ca-app-pub-3940256099942544/6300978111"', 'AdMob banner ad unit ID'),
('interstitial_ad_unit_id', '"ca-app-pub-3940256099942544/1033173712"', 'AdMob interstitial ad unit ID'),
('app_open_ad_unit_id', '"ca-app-pub-3940256099942544/3419835294"', 'AdMob app open ad unit ID'),
('ad_frequency_seconds', '30', 'Minimum seconds between interstitial ads'),
('maintenance_mode', 'false', 'Enable maintenance mode');

-- Insert sample course categories
INSERT INTO public.content_categories (name, description, icon_name, color, order_index) VALUES 
('Website Development', 'Web development courses', 'Code', 'from-blue-500 to-cyan-500', 1),
('Video Creation', 'Video creation and editing', 'Video', 'from-purple-500 to-pink-500', 2),
('Audio Production', 'Audio and music creation', 'Music', 'from-green-500 to-emerald-500', 3),
('Mobile Development', 'Mobile app development', 'Smartphone', 'from-indigo-500 to-purple-500', 4),
('AI Tools', 'Artificial intelligence tools', 'Bot', 'from-teal-500 to-cyan-500', 5),
('Marketing', 'Digital marketing courses', 'Megaphone', 'from-blue-600 to-indigo-600', 6);

-- Migrate existing courses data
INSERT INTO public.courses (title, description, duration, lessons, difficulty, students, type, color, icon_name, is_featured, order_index) VALUES 
('React Website Builder', 'बिना coding के professional websites सीखें', '45 मिनट', 12, 'Beginner', '2.5K+', 'website', 'from-blue-500 to-cyan-500', 'Code', true, 1),
('Hollywood Video Creation', 'AI से cinematic quality videos की complete guide', '1 घंटा 20 मिनट', 18, 'Intermediate', '1.8K+', 'video', 'from-purple-500 to-pink-500', 'Video', true, 2),
('AI Audio Production', 'Professional voice-overs और music generate करना सीखें', '55 मिनट', 15, 'Beginner', '3.2K+', 'audio', 'from-green-500 to-emerald-500', 'Music', true, 3),
('Mobile App Development', 'No-code से professional mobile apps', '2 घंटे', 25, 'Intermediate', '1.2K+', 'app', 'from-indigo-500 to-purple-500', 'Smartphone', false, 4),
('Game Development', 'Simple games बनाना सीखें बिना coding के', '1 घंटा 45 मिनट', 20, 'Beginner', '800+', 'game', 'from-orange-500 to-red-500', 'Gamepad2', false, 5),
('ChatGPT Mastery', 'AI chatbots और automation के साथ काम करना सीखें', '1 घंटा 30 मिनट', 16, 'Beginner', '3.5K+', 'chatgpt', 'from-teal-500 to-cyan-500', 'Bot', true, 6);
