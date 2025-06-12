
import React from 'react';
import { Button } from '@/components/ui/button';
import { Menu, Search, Bell } from 'lucide-react';

const AppHeader = () => {
  return (
    <div className="sticky top-0 z-50 bg-gray-900/95 backdrop-blur-sm border-b border-gray-700">
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center space-x-3">
          <Button variant="ghost" size="icon" className="text-gray-400">
            <Menu className="w-6 h-6" />
          </Button>
          <div>
            <h1 className="text-lg font-bold text-white">AI Creative Studio</h1>
            <p className="text-xs text-gray-400">Learn & Create</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="icon" className="text-gray-400">
            <Search className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-gray-400">
            <Bell className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AppHeader;
