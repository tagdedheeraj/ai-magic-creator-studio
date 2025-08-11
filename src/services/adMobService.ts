
import { AdMob, BannerAdOptions, BannerAdSize, BannerAdPosition } from '@capacitor-community/admob';
import { Capacitor } from '@capacitor/core';

class AdMobService {
  private isInitialized = false;
  private lastInterstitialTime = 0;
  private interstitialCooldown = 60000; // 1 minute cooldown
  private isTestMode = import.meta.env.VITE_ADMOB_TEST_MODE === 'true';
  
  // Ad Unit IDs
  private adUnits = {
    banner: this.isTestMode ? 'ca-app-pub-3940256099942544/6300978111' : 'ca-app-pub-2211398170597117/4315483016',
    interstitial: this.isTestMode ? 'ca-app-pub-3940256099942544/1033173712' : 'ca-app-pub-2211398170597117/3285456460',
    appOpen: this.isTestMode ? 'ca-app-pub-3940256099942544/3419835294' : 'ca-app-pub-2211398170597117/8450185058'
  };

  private isNativePlatform(): boolean {
    return Capacitor.isNativePlatform();
  }

  async initialize() {
    if (this.isInitialized || !this.isNativePlatform()) return;
    
    try {
      await AdMob.initialize({
        testingDevices: this.isTestMode ? ['YOUR_DEVICE_ID'] : [],
        initializeForTesting: this.isTestMode
      });
      this.isInitialized = true;
      console.log(`AdMob initialized successfully for ${this.isTestMode ? 'testing' : 'production'}`);
    } catch (error) {
      console.error('Failed to initialize AdMob:', error);
    }
  }

  async showBanner() {
    if (!this.isNativePlatform() || !this.isInitialized) {
      if (this.isNativePlatform()) await this.initialize();
      else return;
    }
    
    try {
      const options: BannerAdOptions = {
        adId: this.adUnits.banner,
        adSize: BannerAdSize.BANNER,
        position: BannerAdPosition.BOTTOM_CENTER,
        margin: 0,
        isTesting: this.isTestMode
      };
      
      await AdMob.showBanner(options);
      console.log(`${this.isTestMode ? 'Test' : 'Live'} banner ad shown`);
    } catch (error) {
      console.error('Failed to show banner ad:', error);
    }
  }

  async hideBanner() {
    if (!this.isNativePlatform()) return;
    
    try {
      await AdMob.hideBanner();
    } catch (error) {
      console.error('Failed to hide banner ad:', error);
    }
  }

  async showInterstitial(): Promise<boolean> {
    if (!this.isNativePlatform()) return false;

    if (!this.isInitialized) await this.initialize();

    const now = Date.now();
    if (now - this.lastInterstitialTime < this.interstitialCooldown) {
      console.log('Interstitial ad on cooldown');
      return false;
    }

    try {
      await AdMob.prepareInterstitial({
        adId: this.adUnits.interstitial,
        isTesting: this.isTestMode,
      });
      await AdMob.showInterstitial();

      this.lastInterstitialTime = now;
      console.log(`${this.isTestMode ? 'Test' : 'Live'} interstitial ad shown`);
      return true;
    } catch (error) {
      console.error('Failed to show interstitial ad:', error);
      return false;
    }
  }

  async showAppOpen() {
    if (!this.isNativePlatform()) return;

    if (!this.isInitialized) await this.initialize();

    try {
      // For v7, app open ads use the same prepare/show pattern as interstitials
      await AdMob.prepareInterstitial({
        adId: this.adUnits.appOpen,
        isTesting: this.isTestMode,
      });
      await AdMob.showInterstitial();
      console.log(`${this.isTestMode ? 'Test' : 'Live'} app open ad shown`);
    } catch (error) {
      console.error('Failed to show app open ad:', error);
    }
  }
}

export const adMobService = new AdMobService();
