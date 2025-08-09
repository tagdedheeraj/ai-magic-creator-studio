
import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';

interface CourseVideo {
  id: string;
  course_id: string;
  title: string;
  duration: string;
  youtube_id: string | null;
  order_index: number;
  is_active: boolean;
}

export const useCourseVideos = (courseId?: string) => {
  const [videos, setVideos] = useState<CourseVideo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchVideos = async () => {
      if (!courseId) {
        setVideos([]);
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        const { data, error } = await supabase
          .from('course_videos')
          .select('*')
          .eq('course_id', courseId)
          .eq('is_active', true)
          .order('order_index', { ascending: true });

        if (error) throw error;
        setVideos(data || []);
      } catch (err) {
        console.error('Error fetching course videos:', err);
        setError('Failed to fetch course videos');
      } finally {
        setLoading(false);
      }
    };

    fetchVideos();

    // Set up real-time subscription for videos
    const channel = supabase
      .channel(`course_videos_${courseId}`)
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'course_videos',
          filter: courseId ? `course_id=eq.${courseId}` : undefined
        },
        () => {
          fetchVideos();
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [courseId]);

  return { videos, loading, error };
};
