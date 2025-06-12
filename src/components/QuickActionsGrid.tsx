
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Video, Code, Music, User } from 'lucide-react';

interface QuickActionsGridProps {
  onActionClick: (type: string) => void;
}

const QuickActionsGrid: React.FC<QuickActionsGridProps> = ({ onActionClick }) => {
  const quickActions = [
    { icon: <Video className="w-5 h-5" />, title: "Video बनाएं", color: "bg-purple-500", type: "video" },
    { icon: <Code className="w-5 h-5" />, title: "Website बनाएं", color: "bg-blue-500", type: "website" },
    { icon: <Music className="w-5 h-5" />, title: "Audio बनाएं", color: "bg-green-500", type: "audio" },
    { icon: <User className="w-5 h-5" />, title: "AI Model", color: "bg-orange-500", type: "model" }
  ];

  return (
    <div className="grid grid-cols-2 gap-3 mb-8">
      {quickActions.map((action, index) => (
        <Card 
          key={index} 
          className="bg-gray-900/50 border-gray-700 hover:border-purple-500/50 transition-all cursor-pointer"
          onClick={() => onActionClick(action.type)}
        >
          <CardContent className="p-4 text-center">
            <div className={`w-12 h-12 ${action.color} rounded-full flex items-center justify-center mx-auto mb-2`}>
              <div className="text-white">
                {action.icon}
              </div>
            </div>
            <p className="text-white text-sm font-medium">{action.title}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default QuickActionsGrid;
