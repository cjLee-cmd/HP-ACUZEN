import { test, expect } from '@playwright/test';

test('open google and take screenshot', async ({ page }) => {
  await page.goto('https://www.google.com');
  await expect(page).toHaveTitle(/Google/);
  await page.screenshot({ path: 'google.png' });
});