
import { useEffect, useState } from 'react';
import { StatusBar } from '@capacitor/status-bar';
import { Capacitor } from '@capacitor/core';

export const useSafeArea = () => {
  const [safeAreaTop, setSafeAreaTop] = useState(0);
  const [isNativePlatform, setIsNativePlatform] = useState(false);

  useEffect(() => {
    const initializeSafeArea = async () => {
      if (Capacitor.isNativePlatform()) {
        setIsNativePlatform(true);
        
        try {
          // Set status bar style
          await StatusBar.setStyle({ style: 'dark' });
          await StatusBar.setBackgroundColor({ color: '#1e1b4b' });
          
          // Get status bar info
          const info = await StatusBar.getInfo();
          setSafeAreaTop(info.height || 0);
        } catch (error) {
          console.log('Status bar not available:', error);
          // Fallback for web or if status bar plugin fails
          setSafeAreaTop(0);
        }
      } else {
        // Web fallback - use CSS safe area if available
        setSafeAreaTop(0);
      }
    };

    initializeSafeArea();
  }, []);

  return {
    safeAreaTop,
    isNativePlatform,
  };
};
