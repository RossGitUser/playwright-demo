const { test, expect } = require('@playwright/test');

test('Submit form with user details', async ({ page }) => {
    await page.goto('https://www.w3schools.com/html/html_forms.asp', { waitUntil: 'networkidle', timeout: 250000 });

    // Wait for the form fields to be visible
    const fnameInput = page.locator('input[name="fname"]');
    const lnameInput = page.locator('input[name="lname"]');
    const emailInput = page.locator('input[name="email"]');

    // Make sure each input is visible before interacting with them
    await expect(fnameInput).toBeVisible({ timeout: 90000 });
    await expect(lnameInput).toBeVisible({ timeout: 90000 });
    await expect(emailInput).toBeVisible({ timeout: 90000 });

    // Fill in the form
    await page.fill('input[name="fname"]', 'John');
    await page.fill('input[name="lname"]', 'Doe');
    await page.fill('input[name="email"]', 'john.doe@example.com');

    // Submit the form
    await page.click('input[type="submit"]'); // Adjust based on the form button

    // Wait for and verify the success message
    const successMessage = page.locator('text=Thank you for your submission');
    await expect(successMessage).toBeVisible();
});
