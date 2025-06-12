
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Play, X } from 'lucide-react';

interface Course {
  icon: React.ReactNode;
  title: string;
  lessons: number;
  color: string;
  videos: { title: string; duration: string; youtubeId?: string }[];
}

interface VideoLibraryModalProps {
  isOpen: boolean;
  course: Course | null;
  onClose: () => void;
  onStartLearning: () => void;
  onVideoClick: (videoId: string, title: string) => void;
}

const VideoLibraryModal: React.FC<VideoLibraryModalProps> = ({
  isOpen,
  course,
  onClose,
  onStartLearning,
  onVideoClick
}) => {
  if (!isOpen || !course) return null;

  const handleVideoClick = (video: { title: string; duration: string; youtubeId?: string }) => {
    if (video.youtubeId) {
      onVideoClick(video.youtubeId, video.title);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-gray-900 rounded-2xl w-full max-w-md max-h-[80vh] overflow-hidden">
        <div className="flex items-center justify-between p-4 border-b border-gray-700">
          <div className="flex items-center space-x-3">
            <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${course.color} flex items-center justify-center`}>
              <div className="text-white">
                {course.icon}
              </div>
            </div>
            <div>
              <h2 className="text-white font-semibold">{course.title}</h2>
              <p className="text-gray-400 text-sm">{course.lessons} Free Videos</p>
            </div>
          </div>
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={onClose}
            className="text-gray-400 hover:text-white"
          >
            <X className="w-5 h-5" />
          </Button>
        </div>
        
        <div className="p-4 overflow-y-auto max-h-[60vh]">
          <div className="space-y-3">
            {course.videos.map((video, index) => (
              <Card 
                key={index} 
                className="bg-gray-800/50 border-gray-700 hover:border-purple-500/50 transition-all cursor-pointer"
                onClick={() => handleVideoClick(video)}
              >
                <CardContent className="p-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center">
                      <Play className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-white font-medium text-sm">{video.title}</h3>
                      <p className="text-gray-400 text-xs">{video.duration}</p>
                    </div>
                    <Badge className="bg-green-500/20 text-green-300 text-xs">
                      FREE
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-6">
            <Button 
              className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
              onClick={onStartLearning}
            >
              <Play className="w-4 h-4 mr-2" />
              Start Learning Free
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoLibraryModal;
