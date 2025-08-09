
-- Enable pgcrypto extension for password hashing
CREATE EXTENSION IF NOT EXISTS pgcrypto;

-- Drop and recreate the authentication function with proper error handling
DROP FUNCTION IF EXISTS public.authenticate_admin(text, text);
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

-- Fix RLS policies for courses table to allow admin access
DROP POLICY IF EXISTS "Admins can manage courses" ON public.courses;
CREATE POLICY "Admins can manage courses" ON public.courses
  FOR ALL USING (true);

-- Fix RLS policies for course_videos table  
DROP POLICY IF EXISTS "Admins can manage course videos" ON public.course_videos;
CREATE POLICY "Admins can manage course videos" ON public.course_videos
  FOR ALL USING (true);

-- Fix RLS policies for user_analytics table
DROP POLICY IF EXISTS "Admins can view user analytics" ON public.user_analytics;
CREATE POLICY "Admins can view user analytics" ON public.user_analytics
  FOR ALL USING (true);

-- Allow public read access to courses for the main app
CREATE POLICY "Public can read active courses" ON public.courses
  FOR SELECT USING (is_active = true);

-- Allow public read access to course videos for the main app
CREATE POLICY "Public can read active course videos" ON public.course_videos
  FOR SELECT USING (is_active = true);

-- Add sample course data
INSERT INTO public.courses (title, description, duration, lessons, difficulty, students, type, color, icon_name, is_featured, is_active, order_index) VALUES
('React Website Builder', 'Learn to build professional websites without coding', '45 minutes', 12, 'Beginner', '1500+', 'Web Development', 'from-blue-500 to-cyan-500', 'Code', true, true, 1),
('AI Video Creation', 'Create Hollywood-style videos using AI tools', '1 hour 20 minutes', 18, 'Intermediate', '2300+', 'Video Creation', 'from-purple-500 to-pink-500', 'Video', true, true, 2),
('Voice AI Mastery', 'Generate professional voice-overs and music', '55 minutes', 15, 'Beginner', '1800+', 'Audio Production', 'from-green-500 to-blue-500', 'Mic', true, true, 3),
('ChatGPT Business', 'Automate your business with AI chatbots', '1 hour 10 minutes', 20, 'Intermediate', '3200+', 'AI Automation', 'from-orange-500 to-red-500', 'Bot', false, true, 4),
('Image Generation Pro', 'Create stunning visuals with AI tools', '50 minutes', 14, 'Beginner', '2100+', 'Design', 'from-pink-500 to-purple-500', 'Image', false, true, 5);

-- Add sample course videos
INSERT INTO public.course_videos (course_id, title, duration, youtube_id, order_index, is_active) 
SELECT 
  c.id,
  'Introduction to ' || c.title,
  '5 minutes',
  'dQw4w9WgXcQ',
  1,
  true
FROM public.courses c
WHERE c.title IN ('React Website Builder', 'AI Video Creation', 'Voice AI Mastery');

-- Add more sample videos
INSERT INTO public.course_videos (course_id, title, duration, youtube_id, order_index, is_active)
SELECT 
  c.id,
  'Getting Started with Tools',
  '8 minutes', 
  'dQw4w9WgXcQ',
  2,
  true
FROM public.courses c
WHERE c.title IN ('React Website Builder', 'AI Video Creation');

-- Add sample user analytics data
INSERT INTO public.user_analytics (user_id, event_type, event_data) VALUES
(gen_random_uuid(), 'course_view', '{"course_id": "course1", "title": "React Website Builder"}'),
(gen_random_uuid(), 'course_view', '{"course_id": "course2", "title": "AI Video Creation"}'),
(gen_random_uuid(), 'video_watch', '{"video_id": "video1", "duration": 300}'),
(gen_random_uuid(), 'course_complete', '{"course_id": "course1", "completion_time": 2700}'),
(gen_random_uuid(), 'course_view', '{"course_id": "course3", "title": "Voice AI Mastery"}');

-- Ensure admin user exists with proper password
DELETE FROM public.admin_users WHERE email = 'admin@aitoolshindi.com';
INSERT INTO public.admin_users (email, password_hash, name, role, is_active) 
VALUES ('admin@aitoolshindi.com', crypt('admin123', gen_salt('bf')), 'Super Admin', 'super_admin', true);
