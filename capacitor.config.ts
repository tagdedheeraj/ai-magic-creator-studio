
import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.aitoolshindi.app',
  appName: 'AI Tools Hindi',
  webDir: 'dist',
  bundledWebRuntime: false,
  server: {
    url: 'https://2ddcc325-6c9b-4f72-9232-73972f9c8e5f.lovableproject.com?forceHideBadge=true',
    cleartext: true
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 2000,
      backgroundColor: '#1e1b4b',
      showSpinner: false
    },
    StatusBar: {
      style: 'dark',
      backgroundColor: '#1e1b4b'
    }
  }
};

export default config;
