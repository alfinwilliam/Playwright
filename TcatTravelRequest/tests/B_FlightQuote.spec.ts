import { test, expect } from '@playwright/test';
import * as fs from 'fs';
import { stringify } from 'querystring';

var quoteid='';
fs.readFile('quoteid.txt', 'utf8', function(err, data) {
    if (err) throw err;
    //console.log(data)
     quoteid = data;
     //console.log(quoteid);
  });

test('test', async ({ page }) => {
//test.slow();

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

  // Click text=Mr. Ajay Shankar admin.abc@abcorp.comABCORP/0066 - v1 TRV BOM Economy 01 AugAdd  >> button
  await page.locator('text=Mr. Ajay Shankar admin.abc@abcorp.com'+quoteid+' - v1 TRV BOM Economy 01 AugAdd  >> button').click();


  // Click text=TRV-BOM / 01-Aug-2022
  await page.waitForTimeout(2500);
  await page.locator('text=TRV-BOM / 01-Aug-2022').click();
  //await expect(page).toHaveURL('https://sec-test.tcat.app/quotes/requests/47dba8ed-80c3-42ce-a5fe-5c76b559004a/admin.abc@abcorp.com/flightquote/7fc41aaf-0f8a-421a-b54f-fa4b9a3feecb/new?sector=3eaf7197-5634-48b0-ab54-2eb079f0e95c');

  // Click button:has-text("Add Flight")
  await page.locator('button:has-text("Add Flight")').click();

  // Click text=AI/608/12DEC or AI/608/12DEC2021
  await page.locator('text=AI/608/12DEC or AI/608/12DEC2021').click();

  // Fill [placeholder="AI\/608\/12DEC or AI\/608\/12DEC2021"]
  await page.type('[placeholder="AI\\/608\\/12DEC or AI\\/608\\/12DEC2021"]','6E/5301/01AUG2022');

  // Click text=Search
  await page.waitForTimeout(2500);
  await page.locator('text=Search').click();

  // Click text=TRVTrivandrum International Airport
  await page.locator('text=TRVTrivandrum International Airport').click();

  // Click text=Chhatrapati Shivaji International Airport
  await page.locator('text=Chhatrapati Shivaji International Airport').click();

  // Click text=Save
  await page.waitForTimeout(2500);
  await page.locator('text=Save').click();

// Click text=Add Pricing
await page.locator('text=Add Pricing').click();
// Click text=6E 5301 | 01 Aug TRV - BOM >> i
await page.locator('text=6E 5301 | 01 Aug TRV - BOM >> i').click();
// Click label:has-text("Fare")
await page.locator('label:has-text("Fare")').click();
// Fill [placeholder="Fare"]
await page.locator('[placeholder="Fare"]').fill('5000');
// Press Tab
await page.locator('[placeholder="Fare"]').press('Tab');
// Press Tab
//await page.locator('text=Refund OptionSelectRefundableNon RefundableRefund Option >> select').press('Tab');
await page.locator('text=Refund OptionSelectRefundableNon RefundableRefund Option >> select').selectOption('nonrefundable');
// Press Tab
await page.locator('input[name="changeable"]').press('Tab');
// Press Tab
await page.locator('cat-quote-pricing-popup button:has-text("Add Pricing")').press('Tab');
// Click cat-quote-pricing-popup button:has-text("Add Pricing")
await page.locator('cat-quote-pricing-popup button:has-text("Add Pricing")').click();
// Click text=Save
await page.locator('text=Save').click();



  // // Click text=Add Pricing
  // await page.locator('text=Add Pricing').click();

  // // Click text=6E 5301 | 01 Aug TRV - BOM >> i
  // await page.locator('text=6E 5301 | 01 Aug TRV - BOM >> i').click();

  // // Click label:has-text("Fare")
  // await page.locator('label:has-text("Fare")').click();

  // // Fill [placeholder="Fare"]
  // await page.waitForTimeout(2500);
  // await page.type('[placeholder="Fare"]','5000');

  // // Select nonrefundable
  // await page.waitForTimeout(2500);
  // await page.locator('text=Refund OptionSelectRefundableNon RefundableRefund Option >> select').selectOption('nonrefundable');

  //   // Click [placeholder="Fare"]
  //   await page.locator('[placeholder="Fare"]').click();
  
  // // Click cat-quote-pricing-popup button:has-text("Add Pricing")
  // await page.waitForTimeout(2500);
  // //await page.locator('cat-quote-pricing-popup button:has-text("Add Pricing")').click();
  // await page.click('input[value="Add Pricing"]');
  // await page.waitForTimeout(2500);

  // //Click text=Save
  // await page.locator('text=Save').click();

  // // Click cat-quote-pricing-popup h3 i
  // await page.locator('cat-quote-pricing-popup h3 i').click();

  // Click text=Submit Quote
  await page.locator('text=Submit Quote').click();

  // Click text=Yes
  await Promise.all([
    page.waitForNavigation(/*{ url: 'https://sec-test.tcat.app/quotes/list;tab=FLIGHT' }*/),
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