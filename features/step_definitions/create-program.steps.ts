import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { page } from '../support/world'; // You will need to implement a World that provides the Playwright page

Given('I navigate to the landing page', async function () {
  await page.goto('http://localhost:3000/');
});

Given('I create a grocery program {string}', async function (programName: string) {
  await page.waitForSelector('form[action="/programs"] input[name="name"]');
  await page.fill('#name', programName);
  await page.click('button[type="submit"]');
});

Given('I see {string} as heading', async function (heading: string) {
  await expect(page.getByRole('heading', { level: 1 })).toHaveText(heading);
});

When('I add the item {string} with category {string}', async function (itemName: string, category: string) {
  await expect(page.locator('#new-item')).toBeVisible();
  await page.fill('#new-item', itemName);
  await page.fill('#new-category', category);
  await page.click('form[action="/items"] button[type="submit"]');
});

Then('I see {string} in the list of items', async function (itemName: string) {
  await expect(page.locator('.list-group-item', { hasText: itemName })).toBeVisible();
}); 