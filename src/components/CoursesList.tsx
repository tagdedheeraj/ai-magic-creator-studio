
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';
import { Play, Star, ArrowRight } from 'lucide-react';
import { useCourses } from '@/hooks/useCourses';
import { getIconComponent } from '@/utils/iconMapper';

const CoursesList = () => {
  const { courses, loading, error } = useCourses();

  if (loading) {
    return (
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <Skeleton className="h-6 w-48" />
          <Skeleton className="h-8 w-24" />
        </div>
        
        <div className="space-y-4">
          {[...Array(3)].map((_, index) => (
            <Card key={index} className="bg-gray-900/50 border-gray-700">
              <CardContent className="p-4">
                <div className="flex items-start space-x-3">
                  <Skeleton className="w-12 h-12 rounded-lg" />
                  <div className="flex-1">
                    <Skeleton className="h-4 w-3/4 mb-2" />
                    <Skeleton className="h-3 w-full mb-2" />
                    <Skeleton className="h-3 w-1/2" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="mb-8">
        <div className="text-center py-8">
          <p className="text-red-400">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-white">Free Video Courses</h2>
        <Button variant="ghost" className="text-purple-400 text-sm">
          सभी देखें <ArrowRight className="w-4 h-4 ml-1" />
        </Button>
      </div>
      
      <div className="space-y-4">
        {courses.map((course) => (
          <Card key={course.id} className="bg-gray-900/50 border-gray-700 hover:border-purple-500/50 transition-all">
            <CardContent className="p-4">
              <div className="flex items-start space-x-3">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${course.color} flex items-center justify-center flex-shrink-0`}>
                  <div className="text-white">
                    {getIconComponent(course.icon_name)}
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-white font-semibold text-sm leading-tight">{course.title}</h3>
                    <div className="flex items-center space-x-1 ml-2">
                      <Play className="w-4 h-4 text-green-400" />
                      <Badge variant="secondary" className="bg-green-500/20 text-green-300 text-xs px-2 py-0">
                        FREE
                      </Badge>
                    </div>
                  </div>
                  <p className="text-gray-400 text-xs mb-2 line-clamp-2">{course.description}</p>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>{course.lessons} videos • {course.duration}</span>
                    <div className="flex items-center space-x-1">
                      <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                      <span className="text-yellow-400">4.8</span>
                      <span>({course.students})</span>
                    </div>
                  </div>
                  <div className="mt-2">
                    <Badge variant="outline" className="text-xs">
                      {course.difficulty}
                    </Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CoursesList;
