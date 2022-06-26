import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

  // Go to https://int.tcat.app/
  await page.goto('https://int.tcat.app/');

  // Go to https://int.tcat.app/auth/login
  await page.goto('https://int.tcat.app/auth/login');

  // Click [placeholder="Email"]
  await page.locator('[placeholder="Email"]').click();

  // Fill [placeholder="Email"]
  await page.locator('[placeholder="Email"]').fill('admin.abc@abcorp.com');

  // Press Tab
  await page.locator('[placeholder="Email"]').press('Tab');

  // Fill [placeholder="Password"]
  await page.locator('[placeholder="Password"]').fill('test');

  // Click button:has-text("Login")
  await Promise.all([
    page.waitForNavigation(/*{ url: 'https://int.tcat.app/dashboard' }*/),
    page.locator('button:has-text("Login")').click()
  ]);

  // Click text=ReportsSettingsLogout >> i >> nth=2
  await page.locator('text=ReportsSettingsLogout >> i').nth(2).click();
  await expect(page).toHaveURL('https://int.tcat.app/auth/login');

});