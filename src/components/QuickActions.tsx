
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Code, Video, Music, User } from 'lucide-react';

interface QuickAction {
  icon: React.ReactNode;
  title: string;
  color: string;
}

interface QuickActionsProps {
  variant?: 'grid' | 'list';
}

const QuickActions: React.FC<QuickActionsProps> = ({ variant = 'grid' }) => {
  const quickActions: QuickAction[] = [
    { icon: <Video className="w-5 h-5" />, title: "Create Video", color: "bg-purple-500" },
    { icon: <Code className="w-5 h-5" />, title: "Build Website", color: "bg-blue-500" },
    { icon: <Music className="w-5 h-5" />, title: "Generate Audio", color: "bg-green-500" },
    { icon: <User className="w-5 h-5" />, title: "AI Model", color: "bg-orange-500" }
  ];

  if (variant === 'list') {
    return (
      <div className="grid grid-cols-1 gap-4">
        {quickActions.map((action, index) => (
          <Card key={index} className="bg-gray-900/50 border-gray-700 hover:border-purple-500/50 transition-all cursor-pointer">
            <CardContent className="p-6">
              <div className="flex items-center space-x-4">
                <div className={`w-16 h-16 ${action.color} rounded-full flex items-center justify-center`}>
                  <div className="text-white">
                    {action.icon}
                  </div>
                </div>
                <div>
                  <h3 className="text-white text-lg font-semibold">{action.title}</h3>
                  <p className="text-gray-400 text-sm">Start creating now</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-3">
      {quickActions.map((action, index) => (
        <Card key={index} className="bg-gray-900/50 border-gray-700 hover:border-purple-500/50 transition-all cursor-pointer">
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

export default QuickActions;
