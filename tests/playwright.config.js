import { defineConfig } from '@playwright/test';

export default defineConfig({
    timeout: 30000,
    retries: 2,
    use: {
        headless: true,  // Run in headless mode (no UI)
        screenshot: 'only-on-failure',
        video: 'retain-on-failure',
        trace: 'on',
    },
});


