
import { Capacitor } from '@capacitor/core';
import { adMobService } from './adMobService';
import { consentService } from './consentService';

class AppOpenAdService {
  private hasShownOnLaunch = false;
  private lastAppOpenTime = 0;
  private appOpenCooldown = 300000; // 5 minutes cooldown
  private isAppInBackground = false;

  async initialize() {
    if (!Capacitor.isNativePlatform()) return;

    // Listen for app state changes
    document.addEventListener('visibilitychange', this.handleVisibilityChange.bind(this));
  }

  private handleVisibilityChange() {
    if (document.hidden) {
      this.isAppInBackground = true;
    } else if (this.isAppInBackground) {
      this.isAppInBackground = false;
      this.showOnResume();
    }
  }

  async showOnAppLaunch() {
    if (!Capacitor.isNativePlatform() || this.hasShownOnLaunch) return;
    
    // Request consent first
    const consentGranted = await consentService.requestConsentIfNeeded();
    if (!consentGranted) return;

    // Wait for app to fully load
    setTimeout(async () => {
      await adMobService.showAppOpen();
      this.hasShownOnLaunch = true;
      this.lastAppOpenTime = Date.now();
    }, 3000); // Show after 3 seconds
  }

  async showOnResume() {
    if (!Capacitor.isNativePlatform()) return;

    const now = Date.now();
    if (now - this.lastAppOpenTime < this.appOpenCooldown) {
      return;
    }

    // Request consent if needed
    const consentGranted = await consentService.requestConsentIfNeeded();
    if (!consentGranted) return;

    await adMobService.showAppOpen();
    this.lastAppOpenTime = now;
  }
}

export const appOpenAdService = new AppOpenAdService();
