
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Play, CheckCircle, Clock, Star } from 'lucide-react';

interface CourseProgressProps {
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

const CourseProgress: React.FC<CourseProgressProps> = ({
  courseId,
  title,
  description,
  totalVideos,
  completedVideos,
  totalDuration,
  lastWatched,
  rating,
  difficulty
}) => {
  const progressPercentage = (completedVideos / totalVideos) * 100;
  const isCompleted = completedVideos === totalVideos;

  return (
    <Card className="bg-gray-900/50 border-gray-700 hover:border-purple-500/50 transition-all">
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <CardTitle className="text-white text-lg mb-2">{title}</CardTitle>
            <p className="text-gray-400 text-sm mb-3">{description}</p>
            
            <div className="flex items-center space-x-4 text-xs text-gray-500">
              <span>{totalVideos} videos</span>
              <span>{totalDuration}</span>
              <div className="flex items-center space-x-1">
                <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                <span className="text-yellow-400">{rating}</span>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col items-end space-y-2">
            {isCompleted ? (
              <Badge className="bg-green-500/20 text-green-300">
                <CheckCircle className="w-3 h-3 mr-1" />
                Completed
              </Badge>
            ) : (
              <Badge variant="outline" className="text-gray-400">
                {difficulty}
              </Badge>
            )}
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="pt-0">
        <div className="space-y-4">
          {/* Progress Section */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-300">
                Progress: {completedVideos}/{totalVideos} videos
              </span>
              <span className="text-sm text-purple-400 font-medium">
                {Math.round(progressPercentage)}%
              </span>
            </div>
            <Progress 
              value={progressPercentage} 
              className="h-2 bg-gray-800"
            />
          </div>

          {/* Last Watched Info */}
          {lastWatched && !isCompleted && (
            <div className="flex items-center text-xs text-gray-500">
              <Clock className="w-3 h-3 mr-1" />
              Last watched: {lastWatched}
            </div>
          )}

          {/* Action Button */}
          <Button 
            className={`w-full ${
              isCompleted 
                ? 'bg-green-600 hover:bg-green-700' 
                : 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700'
            }`}
          >
            {isCompleted ? (
              <>
                <CheckCircle className="w-4 h-4 mr-2" />
                Review Course
              </>
            ) : (
              <>
                <Play className="w-4 h-4 mr-2" />
                {completedVideos > 0 ? 'Continue Learning' : 'Start Course'}
              </>
            )}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default CourseProgress;
