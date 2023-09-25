import { LaunchOptions } from '@playwright/test';
const browserOptions: LaunchOptions = {
  slowMo: 2000,
};

export const config = {
  browser: process.env.BROWSER || 'chromium',
  browserOptions,
  BASE_URL: 'https://playwright.dev',
};
