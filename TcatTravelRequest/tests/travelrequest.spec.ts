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

  // Press Enter
  await Promise.all([
    page.waitForNavigation(/*{ url: 'https://int.tcat.app/dashboard' }*/),
    page.locator('[placeholder="Password"]').press('Enter')
  ]);

  // Click text=Travel Requests
  await Promise.all([
    page.waitForNavigation(/*{ url: 'https://int.tcat.app/quotes/requests/list' }*/),
    page.locator('text=Travel Requests').click()
  ]);

  // Click text=Create New Request +
  await page.locator('text=Create New Request +').click();
  await expect(page).toHaveURL('https://int.tcat.app/quotes/requests/new');

  // Click text=Myself >> div
  await page.locator('text=Myself >> div').click();

  // Click button:has-text("Add")
  await page.locator('button:has-text("Add")').click();

//   // Click text=FlightHotelCab >> img >> nth=0
//   await page.locator('text=FlightHotelCab >> img').first().click();

//   // Click text=Oneway >> div
//   await page.locator('text=Oneway >> div').click();

//   // Click text=Origin
//   await page.locator('text=Origin').click();

//   // Fill [placeholder="Origin"]
//   await page.locator('[placeholder="Origin"]').fill('TRV');

//   // Click text=TRV
//   await page.locator('text=TRV').click();

//   // Click [placeholder="Destination"]
//   await page.locator('[placeholder="Destination"]').click();

//   // Fill [placeholder="Destination"]
//   await page.locator('[placeholder="Destination"]').fill('BOM');

//   // Click text=BOMChhatrapati Shivaji International Airport, Mumbai (Bombay) >> span >> nth=0
//   await page.locator('text=BOMChhatrapati Shivaji International Airport, Mumbai (Bombay) >> span').first().click();

//   // Click text=Departure DateReturn Date >> i >> nth=0
//   await page.locator('text=Departure DateReturn Date >> i').first().click();

//   // Click text=27
//   await page.locator('text=27').click();

//   // Click text=Add Flight
//   await page.locator('text=Add Flight').click();

//   // Click text=FlightHotelCab >> img >> nth=1
//   await page.locator('text=FlightHotelCab >> img').nth(1).click();

//   // Click text=Location of stay
//   await page.locator('text=Location of stay').click();

//   // Fill [placeholder="Location of stay"]
//   await page.locator('[placeholder="Location of stay"]').fill('bomb');

//   // Click text=Bombay >> nth=0
//   await page.locator('text=Bombay').first().click();

//   // Click text=CheckinCheckout >> i >> nth=1
//   await page.locator('text=CheckinCheckout >> i').nth(1).click();

//   // Click text=28 >> nth=0
//   await page.locator('text=28').first().click();

//   // Click text=Done
//   await page.locator('text=Done').click();

//   // Click text=Add Hotel
//   await page.locator('text=Add Hotel').click();

//   // Click text=Submit
//   await page.locator('text=Submit').click();

//   // Click section:has-text("More Options")
//   await page.locator('section:has-text("More Options")').click();

//   // Click section:has-text("More Options")
//   await page.locator('section:has-text("More Options")').click();

//   // Click [placeholder="Nationality"]
//   await page.locator('[placeholder="Nationality"]').click();

//   // Fill [placeholder="Nationality"]
//   await page.locator('[placeholder="Nationality"]').fill('In');

//   // Click text=INIndia >> span >> nth=0
//   await page.locator('text=INIndia >> span').first().click();

//   // Select MEETING_SALES
//   await page.locator('text=Purpose of TravelSelectProject RelatedSales MeetingPurpose of Travel >> select').selectOption('MEETING_SALES');

//   // Select
//   await page.locator('text=DepartmentSelectUnassignedDepartment >> select').selectOption('');

//   // Click text=Request Summary MR Admin ABC | TRV - BOM / 27Jun | Mumbai / 27Jun - 28Jun (1n)11 >> i >> nth=3
//   await page.locator('text=Request Summary MR Admin ABC | TRV - BOM / 27Jun | Mumbai / 27Jun - 28Jun (1n)11 >> i').nth(3).click();

//   // Click button:has-text("Publish")
//   await page.locator('button:has-text("Publish")').click();

//   // Click text=Ok
//   await page.locator('text=Ok').click();
//   await expect(page).toHaveURL('https://int.tcat.app/quotes/requests/list');

//   // Click text=Actions
//   await page.locator('text=Actions').click();

//   // Click .mdi.mdi-bullhorn
//   await page.locator('.mdi.mdi-bullhorn').click();

//   // Click button:has-text("Publish")
//   await page.locator('button:has-text("Publish")').click();

//   // Click header i >> nth=0
//   await page.locator('header i').first().click();

//   // Click cat-header >> text=Logout
//   await page.locator('cat-header >> text=Logout').click();
//   await expect(page).toHaveURL('https://int.tcat.app/auth/login');

});