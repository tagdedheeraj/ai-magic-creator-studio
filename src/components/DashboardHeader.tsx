
import React from 'react';
import { Button } from '@/components/ui/button';
import { Menu, Bell } from 'lucide-react';
import { useSafeArea } from '@/hooks/useSafeArea';

interface DashboardHeaderProps {
  userName: string;
}

const DashboardHeader: React.FC<DashboardHeaderProps> = ({ userName }) => {
  const { safeAreaTop, isNativePlatform } = useSafeArea();

  const headerStyle = isNativePlatform ? {
    paddingTop: `${safeAreaTop + 12}px`, // Add 12px base padding plus safe area
  } : {};

  return (
    <div 
      className="sticky top-0 z-40 bg-gray-900/95 backdrop-blur-sm border-b border-gray-700 mobile-header"
      style={headerStyle}
    >
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center space-x-3">
          <Button variant="ghost" size="icon" className="text-gray-400">
            <Menu className="w-6 h-6" />
          </Button>
          <div>
            <h1 className="text-lg font-bold text-white">Welcome back, {userName}!</h1>
            <p className="text-xs text-gray-400">Continue your learning journey</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="icon" className="text-gray-400">
            <Bell className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
