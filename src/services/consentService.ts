
import { Capacitor } from '@capacitor/core';

class ConsentService {
  private hasRequestedConsent = false;

  async requestConsentIfNeeded(): Promise<boolean> {
    // Only run on native platforms
    if (!Capacitor.isNativePlatform() || this.hasRequestedConsent) {
      return true;
    }

    try {
      // For now, we'll assume consent is granted
      // In a real implementation, you would use Google UMP SDK
      // or implement your own consent dialog
      this.hasRequestedConsent = true;
      console.log('Consent management completed');
      return true;
    } catch (error) {
      console.error('Consent request failed:', error);
      return false;
    }
  }

  isConsentRequired(): boolean {
    // Check if user is in EU/EEA/UK
    // This is a simplified check - in production you'd use proper geolocation
    const userLanguage = navigator.language.toLowerCase();
    const euLanguages = ['de', 'fr', 'es', 'it', 'pl', 'nl', 'pt', 'cs', 'hu', 'ro', 'bg', 'hr', 'sk', 'sl', 'et', 'lv', 'lt', 'mt', 'el', 'fi', 'sv', 'da', 'en-gb'];
    
    return euLanguages.some(lang => userLanguage.startsWith(lang));
  }
}

export const consentService = new ConsentService();
