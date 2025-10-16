test('Search for NHL Playoff Schedule 2025 on DuckDuckGo', async ({ page }) => {
    await page.goto('https://duckduckgo.com', { timeout: 60000 }); // Increased timeout for navigation

    const searchInputSelector = 'input[name="q"]:not([type="hidden"])';
    const searchButtonSelector = 'input[type="submit"]:not([type="hidden"])';

    // Wait for the search input field to be visible
    await page.waitForSelector(searchInputSelector, { timeout: 60000 });

    // Fill in the search query for "NHL playoff schedule 2025"
    await page.fill(searchInputSelector, 'NHL playoff schedule 2025');

    // Click the search button
    await page.click(searchButtonSelector);

    // Wait for the search results to load with an extended timeout
    await page.waitForSelector('h2', { timeout: 120000 });

    // Verify that the results contain relevant information about the NHL Playoff Schedule
    const result = page.locator('text="Playoffs"');
    await expect(result).toBeVisible({ timeout: 10000 });
});
