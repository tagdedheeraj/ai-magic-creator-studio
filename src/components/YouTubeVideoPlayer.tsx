
import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { X } from 'lucide-react';

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

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl w-full bg-gray-900 border-gray-700">
        <DialogHeader>
          <DialogTitle className="text-white">{title}</DialogTitle>
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
