
import React from 'react';
import { Button } from '@/components/ui/button';
import { 
  Home, 
  Video, 
  User, 
  Search 
} from 'lucide-react';

interface BottomNavBarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const BottomNavBar: React.FC<BottomNavBarProps> = ({ activeTab, onTabChange }) => {
  const navItems = [
    { id: 'home', icon: Home, label: 'Home' },
    { id: 'courses', icon: Video, label: 'Courses' },
    { id: 'search', icon: Search, label: 'Search' },
    { id: 'profile', icon: User, label: 'Profile' }
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-sm border-t border-gray-700 px-2 py-2">
      <div className="flex justify-around items-center max-w-md mx-auto">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          
          return (
            <Button
              key={item.id}
              variant="ghost"
              size="sm"
              className={`flex flex-col items-center space-y-1 p-2 h-auto min-w-0 ${
                isActive 
                  ? 'text-purple-400' 
                  : 'text-gray-400 hover:text-white'
              }`}
              onClick={() => onTabChange(item.id)}
            >
              <Icon className={`w-5 h-5 ${isActive ? 'text-purple-400' : ''}`} />
              <span className={`text-xs font-medium ${isActive ? 'text-purple-400' : ''}`}>
                {item.label}
              </span>
            </Button>
          );
        })}
      </div>
    </div>
  );
};

export default BottomNavBar;
