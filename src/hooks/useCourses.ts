
import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';

interface Course {
  id: string;
  title: string;
  description: string;
  duration: string;
  lessons: number;
  difficulty: string;
  students: string;
  type: string;
  color: string;
  icon_name: string;
  is_featured: boolean;
  is_active: boolean;
  order_index: number;
}

export const useCourses = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        setLoading(true);
        const { data, error } = await supabase
          .from('courses')
          .select('*')
          .eq('is_active', true)
          .order('order_index', { ascending: true });

        if (error) throw error;
        setCourses(data || []);
      } catch (err) {
        console.error('Error fetching courses:', err);
        setError('Failed to fetch courses');
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();

    // Set up real-time subscription
    const channel = supabase
      .channel('courses_changes')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'courses'
        },
        () => {
          fetchCourses();
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  return { courses, loading, error };
};
