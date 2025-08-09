
import React from 'react';
import { getIconComponent } from '@/utils/iconMapper';

export interface DynamicCourse {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  duration: string;
  lessons: number;
  color: string;
  difficulty: string;
  students: string;
  type: string;
  videos: { title: string; duration: string; youtubeId?: string }[];
}

export const transformCourseData = (
  courses: any[],
  courseVideos: any[] = []
): DynamicCourse[] => {
  return courses.map(course => {
    const videos = courseVideos
      .filter(video => video.course_id === course.id && video.is_active)
      .sort((a, b) => a.order_index - b.order_index)
      .map(video => ({
        title: video.title,
        duration: video.duration,
        youtubeId: video.youtube_id || undefined
      }));

    return {
      id: course.id,
      icon: getIconComponent(course.icon_name),
      title: course.title,
      description: course.description,
      duration: course.duration,
      lessons: course.lessons,
      color: course.color,
      difficulty: course.difficulty,
      students: course.students,
      type: course.type,
      videos
    };
  });
};
