import { test } from '@playwright/test';

test.skip('file upload', async ({ page }) => {

    await page.goto('https://www.file.io/');
    await page.locator("#select-files-input").setInputFiles('C:\\Users\\Chandru S\\Downloads\\Edit your resume.pdf');
    await page.waitForTimeout(3000);

});

test('Multiple file upload', async ({ page }) => {

    await page.goto('https://www.file.io/');
    await page.locator("#select-files-input").setInputFiles(['C:\\Users\\Chandru S\\Downloads\\Edit your resume.pdf', 'C:\\Users\\Chandru S\\Downloads\\XPath Cheat Sheet.pdf']);
    await page.waitForTimeout(3000);

})

//this is updated code of automation using POLL SOM