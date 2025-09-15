import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto('https://www.google.com');
  console.log('Google homepage opened. Close the Playwright Inspector window to exit.');
  await page.pause(); // This will open the Playwright Inspector and keep the browser open.
  await browser.close();
})();