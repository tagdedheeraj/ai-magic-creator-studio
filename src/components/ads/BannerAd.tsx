
import React, { useEffect } from 'react';
import { adMobService } from '@/services/adMobService';

interface BannerAdProps {
  show?: boolean;
}

const BannerAd: React.FC<BannerAdProps> = ({ show = true }) => {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        adMobService.showBanner();
      }, 1000); // Show after 1 second delay

      return () => {
        clearTimeout(timer);
        adMobService.hideBanner();
      };
    } else {
      adMobService.hideBanner();
    }
  }, [show]);

  // Reserve space for banner ad (50px height)
  return show ? (
    <div className="h-[50px] w-full bg-transparent" />
  ) : null;
};

export default BannerAd;
