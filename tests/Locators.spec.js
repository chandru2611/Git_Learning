import { test } from '@playwright/test';

test('Locator Playwright', async ({ page }) => {

    await page.goto('https://demoqa.com/automation-practice-form/');
    await page.getByPlaceholder('First Name').fill('Chandru');
    await page.getByPlaceholder('Last Name').fill('S');
    await page.getByPlaceholder('name@example.com').fill('dummy93@gmail.com');
    await page.locator('//*[@id="gender-radio-1"]').check();
    await page.getByPlaceholder('Mobile Number').fill('9876543210');
    //await page.locator('#dateOfBirthInput').fill('10 May 1990').press('Enter');
    await page.locator('#subjectsInput').click();
    await page.locator('#subjectsInput').fill('Maths');
    await page.getByRole('checkbox', { name: 'Sports' }).check();
    await page.getByPlaceholder('Current Address').fill('Chennai');
    await page.selectOption('#state', { label: 'NCR' });

    await page.waitForTimeout(3000);



})