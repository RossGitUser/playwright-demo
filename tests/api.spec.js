// Trigger GitHub Actions run
const { test, expect } = require('@playwright/test');

test('GET request to JSONPlaceholder API', async ({ request }) => {
    const response = await request.get('https://jsonplaceholder.typicode.com/posts/1');
    expect(response.status()).toBe(200);

    const responseBody = await response.json();
    expect(responseBody).toHaveProperty('id', 1);
    expect(responseBody).toHaveProperty('title');
});
// ping GitHub CI
// manual trigger
