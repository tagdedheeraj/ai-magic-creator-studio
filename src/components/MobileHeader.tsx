
import React from 'react';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';
import { useSafeArea } from '@/hooks/useSafeArea';

interface MobileHeaderProps {
  title?: string;
  onMenuClick?: () => void;
}

const MobileHeader: React.FC<MobileHeaderProps> = ({ 
  title = "AI Tools Hindi", 
  onMenuClick 
}) => {
  const { safeAreaTop, isNativePlatform } = useSafeArea();

  const headerStyle = isNativePlatform ? {
    paddingTop: `${safeAreaTop + 12}px`,
  } : {};

  return (
    <div 
      className="sticky top-0 z-40 bg-gray-900/95 backdrop-blur-sm border-b border-gray-700 mobile-header"
      style={headerStyle}
    >
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center space-x-3">
          {onMenuClick && (
            <Button variant="ghost" size="icon" className="text-gray-400" onClick={onMenuClick}>
              <Menu className="w-6 h-6" />
            </Button>
          )}
          <h1 className="text-lg font-bold text-white">{title}</h1>
        </div>
      </div>
    </div>
  );
};

export default MobileHeader;
