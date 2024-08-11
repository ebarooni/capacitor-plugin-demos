import { CapacitorConfig } from '@capacitor/cli';

let config: CapacitorConfig;

const baseConfig: CapacitorConfig = {
  appId: 'dev.barooni.',
  server: {
    androidScheme: 'https',
  },
};

switch (process.env['NODE_ENV']) {
  case 'capacitor-calendar':
    config = {
      ...baseConfig,
      appId: `${baseConfig.appId}CapacitorCalendar`,
      appName: 'Capacitor Calendar',
      webDir: './dist/capacitor-calendar/browser',
      ios: {
        path: './projects/capacitor-calendar/ios',
      },
      android: {
        path: './projects/capacitor-calendar/android',
      },
    };
    break;
  default:
    config = {
      ...baseConfig,
      appId: `${baseConfig.appId}CapacitorCalendar`,
      appName: 'Capacitor Calendar',
      webDir: './dist/capacitor-calendar/browser',
      ios: {
        path: './projects/capacitor-calendar/ios',
      },
      android: {
        path: './projects/capacitor-calendar/android',
      },
    };
    break;
}

export default config;
