import { test, expect } from '@playwright/test';


test('Handling login popup in flipkart', async ({ page }) => {
    
    await page.goto('https://www.flipkart.com/');
    try {
        await page.waitForSelector('//input[@type="number"]', { timeout: 10000 });
        await page.locator('//input[@type="number"]').fill('9876543256');
        await page.getByRole('button', { name: "Continue" }).click();
    }
    catch {
        console.log('popup not came');
    }

});

// test('Popup Handle in Makemytrip', async ({ page }) => {

//     await page.goto('https://www.makemytrip.com/');
//     try{
//         await page.waitForSelector('//input[@placeholder="Enter Mobile Number"]', { timeout: 10000 });
//         await page.locator('//input[@placeholder="Enter Mobile Number"]').fill('1234567890');
//         await page.locator('//button[@data-cy="continueBtn"]').click();
//         await page.waitFforTimeout(3000);

//         // await page.waitForSelector('//input[@placeholder="Enter OTP here"]', { timeout: 10000 });
//         // await page.locator('//input[@placeholder="Enter OTP here"]').fill('123456');
//         // await page.locator('//button[@data-cy="verifyAndCreate"]').click();
        
//         // if (await page.locator('//span[text()="Incorrect OTP Entered. Please try again."]').isVisible()) {
//         //     console.log('Invalid OTP message is displayed.');
//         // }
//     }
//     catch (error) {
//         console.error('Error occurred while waiting for selector:', error);
//     }

// });