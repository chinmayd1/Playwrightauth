import { test, expect } from '@playwright/test';
test('loginTestcaseOne', async ({ page ,request}) => {
    await page.goto('https://conduit.bondaracademy.com')
    await expect(page.locator("h1")).toBeVisible()
});
