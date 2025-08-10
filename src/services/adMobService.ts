
import { AdMob, BannerAdOptions, BannerAdSize, BannerAdPosition, RewardAdOptions, AdMobRewardItem, AdLoadInfo } from '@capacitor-community/admob';

class AdMobService {
  private isInitialized = false;
  private lastInterstitialTime = 0;
  private interstitialCooldown = 60000; // 1 minute cooldown
  
  // Ad Unit IDs
  private adUnits = {
    banner: 'ca-app-pub-2211398170597117/4315483016',
    interstitial: 'ca-app-pub-2211398170597117/3285456460',
    appOpen: 'ca-app-pub-2211398170597117/8450185058'
  };

  async initialize() {
    if (this.isInitialized) return;
    
    try {
      await AdMob.initialize({
        testingDevices: [], // Removed testing device IDs for production
        initializeForTesting: false // Changed to false for live ads
      });
      this.isInitialized = true;
      console.log('AdMob initialized successfully for production');
    } catch (error) {
      console.error('Failed to initialize AdMob:', error);
    }
  }

  async showBanner() {
    if (!this.isInitialized) await this.initialize();
    
    try {
      const options: BannerAdOptions = {
        adId: this.adUnits.banner,
        adSize: BannerAdSize.BANNER,
        position: BannerAdPosition.BOTTOM_CENTER,
        margin: 0,
        isTesting: false // Changed to false for live ads
      };
      
      await AdMob.showBanner(options);
      console.log('Live banner ad shown');
    } catch (error) {
      console.error('Failed to show banner ad:', error);
    }
  }

  async hideBanner() {
    try {
      await AdMob.hideBanner();
    } catch (error) {
      console.error('Failed to hide banner ad:', error);
    }
  }

  async showInterstitial(): Promise<boolean> {
    if (!this.isInitialized) await this.initialize();
    
    // Check cooldown
    const now = Date.now();
    if (now - this.lastInterstitialTime < this.interstitialCooldown) {
      console.log('Interstitial ad on cooldown');
      return false;
    }

    try {
      const options: RewardAdOptions = {
        adId: this.adUnits.interstitial,
        isTesting: false // Changed to false for live ads
      };

      await AdMob.prepareRewardVideoAd(options);
      await AdMob.showRewardVideoAd();
      
      this.lastInterstitialTime = now;
      console.log('Live interstitial ad shown');
      return true;
    } catch (error) {
      console.error('Failed to show interstitial ad:', error);
      return false;
    }
  }

  async showAppOpen() {
    if (!this.isInitialized) await this.initialize();
    
    try {
      const options: RewardAdOptions = {
        adId: this.adUnits.appOpen,
        isTesting: false // Changed to false for live ads
      };

      await AdMob.prepareRewardVideoAd(options);
      await AdMob.showRewardVideoAd();
      console.log('Live app open ad shown');
    } catch (error) {
      console.error('Failed to show app open ad:', error);
    }
  }
}

export const adMobService = new AdMobService();
