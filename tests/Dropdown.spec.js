import { test } from '@playwright/test';

test('dropdowns', async ({ page }) => {

    await page.goto('https://www.testautomationcentral.com/demo/dropdown.html');
    await page.getByRole('button', { name: 'Multi-Select' }).click();
    await page.selectOption('[multiple]', (['Option 1', 'Option 2']));

    await page.getByRole('button', { name: 'Simple Dropdown' }).click();
    await page.selectOption({value: "option2"});
    await page.waitForTimeout(3000);


})