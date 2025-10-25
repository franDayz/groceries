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

Then('I see items grouped by category', async function () {
  await expect(page.locator('h5.text-primary')).toBeVisible();
  await expect(page.locator('#grocery-list .list-group')).toBeVisible();
});

When('I toggle the stock status of {string}', async function (itemName: string) {
  const itemElement = page.locator('.list-group-item', { hasText: itemName });
  const toggle = itemElement.locator('.stock-toggle');
  await toggle.click();
});

Then('I see {string} is marked as in stock', async function (itemName: string) {
  const itemElement = page.locator('.list-group-item', { hasText: itemName });
  const toggle = itemElement.locator('.stock-toggle');
  
  // Wait for the toggle to be checked and the span to have success styling
  await expect(toggle).toBeChecked({ timeout: 10000 });
  await expect(itemElement.locator('span')).toHaveClass(/text-success/, { timeout: 10000 });
}); 