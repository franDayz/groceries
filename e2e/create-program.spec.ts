import { test, expect } from '@playwright/test';

test('Create new grocery program and add item', async ({ page }) => {
  await page.goto('http://localhost:3000/');

  await page.waitForSelector('form[action="/programs"] input[name="name"]');

  await page.fill('#name', 'Weekly Groceries');
  await page.click('button[type="submit"]');

  await expect(page.getByRole('heading', { level: 1 })).toHaveText('Weekly Groceries');
  await expect(page.locator('#new-item')).toBeVisible();
  await expect(page.locator('form[action="/items"]')).toBeVisible();

  const itemName = 'Bananas';
  await page.fill('#new-item', itemName);
  await page.click('form[action="/items"] button[type="submit"]');


  await expect(page.locator('.list-group-item', { hasText: itemName })).toBeVisible();
});
