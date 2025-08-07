
import { adMobService } from './adMobService';

class AppOpenAdService {
  private hasShownOnLaunch = false;
  private lastAppOpenTime = 0;
  private appOpenCooldown = 300000; // 5 minutes cooldown

  async showOnAppLaunch() {
    if (this.hasShownOnLaunch) return;
    
    // Wait a bit for app to fully load
    setTimeout(async () => {
      await adMobService.showAppOpen();
      this.hasShownOnLaunch = true;
      this.lastAppOpenTime = Date.now();
    }, 3000); // Show after 3 seconds
  }

  async showOnResume() {
    const now = Date.now();
    if (now - this.lastAppOpenTime < this.appOpenCooldown) {
      return;
    }

    await adMobService.showAppOpen();
    this.lastAppOpenTime = now;
  }
}

export const appOpenAdService = new AppOpenAdService();
