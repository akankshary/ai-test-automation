const { test, expect } = require('@playwright/test');

test('locked out user sees an error message', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  await page.fill('#user-name', 'locked_out_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');

  await expect(page.locator('[data-test="error"]')).toBeVisible();
});