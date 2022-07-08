import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

  // Go to https://sec-test.tcat.app/auth/login
  await page.goto('https://sec-test.tcat.app/auth/login');

  // Click text=Email
  await page.locator('text=Email').click();

  // Fill [placeholder="Email"]
  await page.locator('[placeholder="Email"]').fill('catalyca.agent@catalyca.com');

  // Press Tab
  await page.locator('[placeholder="Email"]').press('Tab');

  // Fill [placeholder="Password"]
  await page.locator('[placeholder="Password"]').fill('test');

  // Press Enter
  await Promise.all([
    page.waitForNavigation(/*{ url: 'https://sec-test.tcat.app/dashboard' }*/),
    page.locator('[placeholder="Password"]').press('Enter')
  ]);

  // Click text=DashboardQuotesInvoicesMessages >> i >> nth=1
  await Promise.all([
    page.waitForNavigation(/*{ url: 'https://sec-test.tcat.app/quotes/list;tab=FLIGHT' }*/),
    page.locator('text=DashboardQuotesInvoicesMessages >> i').nth(1).click()
  ]);

  // Click button:has-text("Hotel")
  await page.locator('button:has-text("Hotel")').click();
  await expect(page).toHaveURL('https://sec-test.tcat.app/quotes/list;tab=HOTEL');

  // Click .actions > span:nth-child(2) >> nth=0
  await page.locator('.actions > span:nth-child(2)').first().click();
  //await expect(page).toHaveURL('https://sec-test.tcat.app/quotes/requests/d41ed954-f603-4967-ad4a-6a4ce953fb69/admin.abc@abcorp.com/hotelquote/420cde01-5703-46ff-b3b6-9da07a9e9823/new');

  // Click text=Search your hotel here...
  await page.locator('text=Search your hotel here...').click();

  // Fill [placeholder="Search your hotel here\.\.\."]
  await page.locator('[placeholder="Search your hotel here\\.\\.\\."]').fill('mumbai hotel');

  // Click li:has-text("Hotel Sahara StarNehru Road, opp. Domestic Airport, Navpada, Vile Parle East, Vi")
  await page.locator('li:has-text("Hotel Sahara StarNehru Road, opp. Domestic Airport, Navpada, Vile Parle East, Vi")').click();

  // Click text=Total Price
  await page.locator('text=Total Price').click();

  // Fill [placeholder="Total Price"]
  await page.locator('[placeholder="Total Price"]').fill('5000');

  // Click text=Submit Quote
  await page.locator('text=Submit Quote').click();

  // Click text=Yes
  await Promise.all([
    page.waitForNavigation(/*{ url: 'https://sec-test.tcat.app/quotes/list;tab=HOTEL' }*/),
    page.locator('text=Yes').click()
  ]);

  // Click button:has-text("No")
  await page.locator('button:has-text("No")').click();

  // Click text=Simplifying Business TravelCatalyca AgentAgency User CatalycaTravel Agent Logout >> i >> nth=0
  await page.locator('text=Simplifying Business TravelCatalyca AgentAgency User CatalycaTravel Agent Logout >> i').first().click();

  // Click cat-header >> text=Logout
  await page.locator('cat-header >> text=Logout').click();
  await expect(page).toHaveURL('https://sec-test.tcat.app/auth/login');

});