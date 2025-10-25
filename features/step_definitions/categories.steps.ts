import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { page } from '../support/world';

Given('I have items with categories {string}, {string}, and {string}', async function (category1: string, category2: string, category3: string) {
  await page.goto('http://localhost:3000/');
  await page.fill('#name', 'Test Program');
  await page.click('button[type="submit"]');
  
  await page.waitForSelector('#new-item');
  
  await page.fill('#new-item', 'Apple');
  await page.fill('#new-category', category1);
  await page.click('form[action="/items"] button[type="submit"]');
  
  await page.fill('#new-item', 'Carrot');
  await page.fill('#new-category', category2);
  await page.click('form[action="/items"] button[type="submit"]');
  
  await page.fill('#new-item', 'Milk');
  await page.fill('#new-category', category3);
  await page.click('form[action="/items"] button[type="submit"]');
});

When('I request the categories endpoint', async function () {
  const response = await page.request.get('http://localhost:3000/categories');
  this.categoriesResponse = await response.json();
});

Then('I should receive a list of categories containing {string}, {string}, and {string}', async function (category1: string, category2: string, category3: string) {
  expect(this.categoriesResponse.categories).toBeDefined();
  expect(this.categoriesResponse.categories).toContain(category1);
  expect(this.categoriesResponse.categories).toContain(category2);
  expect(this.categoriesResponse.categories).toContain(category3);
});
