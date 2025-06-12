
import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { X, Bell } from 'lucide-react';

interface YouTubeVideoPlayerProps {
  isOpen: boolean;
  onClose: () => void;
  videoId: string;
  title: string;
}

const YouTubeVideoPlayer: React.FC<YouTubeVideoPlayerProps> = ({ 
  isOpen, 
  onClose, 
  videoId, 
  title 
}) => {
  const embedUrl = `https://www.youtube.com/embed/${videoId}`;

  const handleSubscribe = () => {
    // Open YouTube channel in new tab
    window.open('https://www.youtube.com/channel/UCpEhnqL0y41EpW2TvWAHD7Q?sub_confirmation=1', '_blank');
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl w-full bg-gray-900 border-gray-700">
        <DialogHeader className="flex flex-row items-center justify-between">
          <DialogTitle className="text-white">{title}</DialogTitle>
          <div className="flex items-center space-x-2">
            <Button
              onClick={handleSubscribe}
              className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg"
            >
              <Bell className="w-4 h-4 mr-2" />
              Subscribe
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={onClose}
              className="text-gray-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </Button>
          </div>
        </DialogHeader>
        <div className="aspect-video w-full">
          <iframe
            src={embedUrl}
            title={title}
            className="w-full h-full rounded-lg"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default YouTubeVideoPlayer;
