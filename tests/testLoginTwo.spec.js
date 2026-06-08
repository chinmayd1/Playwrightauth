import { test, expect } from '@playwright/test';
test('loginTestcaseTwo', async ({ page ,request}) => {
  await page.goto('https://conduit.bondaracademy.com')
  await expect(page.locator("h1")).toBeVisible()
});
