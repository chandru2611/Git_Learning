import { test } from '@playwright/test';

test('dropdowns', async ({ page }) => {

    await page.goto('https://www.testautomationcentral.com/demo/dropdown.html');
    await page.getByRole('button', { name: 'Multi-Select' }).click();
    await page.selectOption('[multiple]', (['Option 1', 'Option 2']));

    await page.getByRole('button', { name: 'Simple Dropdown' }).click();
    await page.selectOption({value: "option2"});
    await page.waitForTimeout(3000);

    //this is Conflict message dropdown, so we will select the value from the dropdown
    await page.getByRole('button', { name: 'Conflict Message' }).click();
    await page.selectOption({value: "option2"});
    await page.waitForTimeout(3000);
    
    //This is dropdown with search box, so we will type the value and select it
    await page.getByRole('button', { name: 'Dropdown with Search' }).click();
    await page.locator('#myInput').fill('Option 3');
    await page.locator('#myInput').press('Enter');
    await page.waitForTimeout(3000);

})