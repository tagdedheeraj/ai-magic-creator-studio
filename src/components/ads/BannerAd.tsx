
import React, { useEffect } from 'react';
import { Capacitor } from '@capacitor/core';
import { adMobService } from '@/services/adMobService';
import { consentService } from '@/services/consentService';

interface BannerAdProps {
  show?: boolean;
}

const BannerAd: React.FC<BannerAdProps> = ({ show = true }) => {
  useEffect(() => {
    const initializeAds = async () => {
      // Only show ads on native platforms
      if (!Capacitor.isNativePlatform()) return;

      if (show) {
        // Request consent if needed
        const consentGranted = await consentService.requestConsentIfNeeded();
        if (!consentGranted) return;

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
    };

    initializeAds();
  }, [show]);

  // Only reserve space on native platforms
  if (!Capacitor.isNativePlatform()) return null;

  // Reserve space for banner ad (50px height)
  return show ? (
    <div className="h-[50px] w-full bg-transparent" />
  ) : null;
};

export default BannerAd;
