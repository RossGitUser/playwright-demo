const { test, expect } = require('@playwright/test');

test('Check Google Search button state', async ({ page }) => {
    await page.goto('https://www.google.com');

    // Accept cookies if the consent popup appears (optional)
    const acceptButton = page.locator('text=Accept all');
    if (await acceptButton.isVisible()) {
        await acceptButton.click();
    }

    // Locate the first "Google Search" button
    const searchButton = page.locator('input[name="btnK"]').first();

    // Ensure the button is enabled
    await expect(searchButton).toBeEnabled();

    // Fill in the search bar before clicking the button
    await page.fill('textarea[name="q"]', 'Playwright Test');
    await searchButton.click();

    // Verify navigation to search results
    await expect(page).toHaveURL(/.*google.com\/search.*/);
});
