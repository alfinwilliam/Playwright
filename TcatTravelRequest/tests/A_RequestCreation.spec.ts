import { test, expect } from '@playwright/test';
import {username} from './credentials';
import {password} from './credentials';
import {requestvalues} from './inputvalues';
import * as fs from 'fs';
var tcatusername = username();
var tcatpassword = password();
const values = requestvalues();

test('test', async ({ page }) => {

  // Go to https://sec-test.tcat.app/auth/login
  await page.goto('https://sec-test.tcat.app/auth/login');

  // Click [placeholder="Email"]
  await page.locator('[placeholder="Email"]').click();

  // Fill [placeholder="Email"]
  await page.locator('[placeholder="Email"]').fill(tcatusername);

  // Press Tab
  await page.locator('[placeholder="Email"]').press('Tab');

  // Fill [placeholder="Password"]
  await page.locator('[placeholder="Password"]').fill(tcatpassword);

  // Press Enter
  await Promise.all([
    page.waitForNavigation(/*{ url: 'https://sec-test.tcat.app/dashboard' }*/),
    page.locator('[placeholder="Password"]').press('Enter')
  ]);

  // Click text=Travel Requests
  await Promise.all([
    page.waitForNavigation(/*{ url: 'https://sec-test.tcat.app/quotes/requests/list' }*/),
    page.locator('text=Travel Requests').click()
  ]);

  // Click text=Create New Request +
  await page.locator('text=Create New Request +').click();
  await expect(page).toHaveURL('https://sec-test.tcat.app/quotes/requests/new');

  // Click text=Myself >> div
  await page.locator('text=Myself >> div').click();
  

  // Click button:has-text("Add")
  await page.waitForTimeout(2500);
  await page.locator('button:has-text("Add")').click();

  //Click text=FlightHotelCab >> img >> nth=0
  await page.locator('text=FlightHotelCab >> img').first().click();

  

  // Flight Booking >>>>>>>>>>
  
  // Click text=Oneway >> div
  await page.locator('text=Oneway >> div').click();
  // Click [placeholder="Origin"]
  await page.locator('[placeholder="Origin"]').click();
  // Fill [placeholder="Origin"]
  await page.locator('[placeholder="Origin"]').fill(values[0]);
  // Click text=TRV
  // await page.waitForTimeout(2500);
  // await page.locator('text=TRV').click();
  await page.locator('label:has-text("Destination")').click();
  // Fill [placeholder="Destination"]
  await page.locator('[placeholder="Destination"]').fill(values[1]);

  // Press Tab
  await page.locator('[placeholder="Destination"]').press('Tab');

  // Fill [placeholder="Departure Date"]
  await page.locator('[placeholder="Departure Date"]').fill(values[2]);

  // Press Tab
  await page.locator('[placeholder="Departure Date"]').press('Tab');

  // Click text=Add Flight
  await page.locator('text=Add Flight').click();


//Hotel Booking >>>>>>>>>>>

// Click text=FlightHotelCab >> img >> nth=1
await page.locator('text=FlightHotelCab >> img').nth(1).click();
  

// Click text=Location of stay
await page.locator('text=Location of stay').click();


//await page.waitForTimeout(2500);
// Fill [placeholder="Location of stay"]
//await page.locator('[placeholder="Location of stay"]').fill('Bombay');

await page.type('[placeholder="Location of stay"]', values[3]);

let autofillname = values[4];

// Click li:has-text("Bombay BeachCA, USA")
await page.locator(`li:has-text('${autofillname}')`).click();

// Click [placeholder="Checkin"]
await page.locator('[placeholder="Checkin"]').click();

// Fill [placeholder="Checkin"]
await page.locator('[placeholder="Checkin"]').fill(values[5]);

// Press Tab
await page.locator('[placeholder="Checkin"]').press('Tab');

// Fill [placeholder="Checkout"]
await page.locator('[placeholder="Checkout"]').fill(values[6]);

// Press Tab
await page.locator('[placeholder="Checkout"]').press('Tab');

// Press Tab
await page.locator('[placeholder="Remarks"]').press('Tab');

// Click text=Add Hotel
await page.locator('text=Add Hotel').click();



  // Click text=Submit
  await page.locator('text=Submit').click();


  // Click button:has-text("Publish")
  await page.locator('button:has-text("Publish")').click();
  

  // Select PROJECT_RELATED
  await page.locator('select').first().selectOption('PROJECT_RELATED');
  await page.waitForTimeout(2500);

  // Click button:has-text("Publish")
  await page.locator('button:has-text("Publish")').click();
   
    
    // Click text=Ok
    await page.locator('text=Ok').click();
    await expect(page).toHaveURL('https://sec-test.tcat.app/quotes/requests/list');




    //-----------------------------------------------------------------------------------------------

      // Click label:has-text("Traveller")
    await page.locator('label:has-text("Traveller")').click();

    // Fill [placeholder="Traveller"]
    await page.locator('[placeholder="Traveller"]').fill(values[7]);

    // Click button:has-text("Search")
    await page.locator('button:has-text("Search")').click();

    // Click .icon-button >> nth=0
    await page.waitForTimeout(2500);
    await page.locator('.icon-button').first().click();
    await page.waitForTimeout(2500);

    // retrieving unique travel quote ID of created request
    var quoteid = await page.$eval(".prl", el => el.textContent);
    //console.log(quoteid);

    // applying regex to narrow down on ID
    const regex = /ABCORP\/\d{4}/;
    const found = quoteid.match(regex);
    console.log(found[0]);

    //quoteid out to text file
    fs.writeFileSync('quoteid.txt', found[0]);

    //var quoteid = await page.locator('text=ABCORP/').click();
    // var quoteid = page.locator('text=ABCORP/').textContent
    // fs.writeFileSync('quoteid.txt', quoteid);



  //----------------------------------------------------------------------------------------------------





    // Click text=Simplifying Business TravelAjay ShankarCorporate User AB CorporationCompany Admi >> i >> nth=0
    await page.locator('text=Simplifying Business TravelAjay ShankarCorporate User AB CorporationCompany Admi >> i').first().click();
    
    // Click cat-header >> text=Logout
    await page.locator('cat-header >> text=Logout').click();
    await expect(page).toHaveURL('https://sec-test.tcat.app/auth/login');

});