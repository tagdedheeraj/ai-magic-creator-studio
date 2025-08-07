
import { useCallback } from 'react';
import { adMobService } from '@/services/adMobService';

export const useInterstitialAd = () => {
  const showInterstitial = useCallback(async (): Promise<boolean> => {
    try {
      return await adMobService.showInterstitial();
    } catch (error) {
      console.error('Error showing interstitial ad:', error);
      return false;
    }
  }, []);

  return {
    showInterstitial
  };
};
