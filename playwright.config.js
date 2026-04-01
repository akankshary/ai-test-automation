const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  timeout: 30000,
  retries: 1,
  reporter: [['html'], ['list']],
  projects: [
    {
      name: 'ui-tests',
      testDir: './tests',
      use: {
        headless: true,
        screenshot: 'only-on-failure',
        video: 'retain-on-failure',
        trace: 'on-first-retry',
      },
    },
    {
      name: 'api-tests',
      testDir: './api-tests',
    },
  ],
});