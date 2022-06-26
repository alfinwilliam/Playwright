import { test, expect } from '@playwright/test';

import {username} from './credentials';
import {Password} from './credentials';
var tcatusername = username();
var password = Password();

test('test', async ({ page }) => {

  // Go to https://int.tcat.app/
  await page.goto('https://int.tcat.app/');

  // Go to https://int.tcat.app/auth/login
  await page.goto('https://int.tcat.app/auth/login');

  // Click [placeholder="Email"]
  await page.locator('[placeholder="Email"]').click();

  // Fill [placeholder="Email"]
  await page.locator('[placeholder="Email"]').fill(tcatusername);

  // Press Tab
  await page.locator('[placeholder="Email"]').press('Tab');

  // Fill [placeholder="Password"]
  await page.locator('[placeholder="Password"]').fill(password);

  // Click button:has-text("Login")
  await Promise.all([
    page.waitForNavigation(/*{ url: 'https://int.tcat.app/dashboard' }*/),
    page.locator('button:has-text("Login")').click()
  ]);

  // Click text=ReportsSettingsLogout >> i >> nth=2
  await page.locator('text=ReportsSettingsLogout >> i').nth(2).click();
  await expect(page).toHaveURL('https://int.tcat.app/auth/login');

});