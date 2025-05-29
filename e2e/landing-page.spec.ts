import { test, expect } from '@playwright/test';

test.describe('Landing Page', () => {
  test('should display a welcoming grocery list page', async ({ page }) => {
    // Navigate to the homepage
    await page.goto('/');

    // Check the title
    await expect(page).toHaveTitle('Grocery List Manager');

    // Check the welcome message
    const welcome = page.getByText('Welcome to your grocery list!');
    await expect(welcome).toBeVisible();

    // Check the input field
    const input = page.getByPlaceholder('Add new item...');
    await expect(input).toBeVisible();
    await expect(input).toHaveAttribute('class', /form-control/);

    // Check the button
    const button = page.getByRole('button', { name: 'Add Item' });
    await expect(button).toBeVisible();
    await expect(button).toHaveAttribute('class', /btn btn-primary/);
  });

  test('should allow users to add items to their shopping list', async ({ page }) => {
    await page.goto('/');
    
    // Type into the input field
    const input = page.getByPlaceholder('Add new item...');
    await input.fill('Bananas');
    
    // Click the add button
    const button = page.getByRole('button', { name: 'Add Item' });
    await button.click();
    
    // Check if the item appears in the list
    await expect(page.getByText('Bananas')).toBeVisible();
  });
}); 