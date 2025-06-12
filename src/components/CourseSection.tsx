
import React from 'react';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import CourseProgress from './CourseProgress';

interface Course {
  courseId: string;
  title: string;
  description: string;
  totalVideos: number;
  completedVideos: number;
  totalDuration: string;
  lastWatched?: string;
  rating: number;
  difficulty: string;
}

interface CourseSectionProps {
  title: string;
  courses: Course[];
  showBrowseMore?: boolean;
}

const CourseSection: React.FC<CourseSectionProps> = ({ 
  title, 
  courses, 
  showBrowseMore = false 
}) => {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-white">{title}</h2>
        {showBrowseMore && (
          <Button className="bg-gradient-to-r from-purple-600 to-pink-600">
            <Plus className="w-4 h-4 mr-2" />
            Browse More
          </Button>
        )}
      </div>
      
      <div className="space-y-4">
        {courses.map((course) => (
          <CourseProgress key={course.courseId} {...course} />
        ))}
      </div>
    </div>
  );
};

export default CourseSection;
