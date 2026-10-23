import { test } from '@playwright/test';

test('Handling JS Alerts', async ({ page }) => {

    await page.goto('https://demoqa.com/alerts');

    //Simple Alert
    page.once('dialog', async dialog => {
        console.log(`Dialog message: ${dialog.message()}`);
        console.log(`Dialog type: ${dialog.type()}`);
        await dialog.accept();
        await dialog.dismiss();
    });

    await page.locator("//button[@id='alertButton']").click();

    //Confirm Alert
    page.once('dialog', async dialog => {
        console.log(`Dialog message: ${dialog.message()}`);
        console.log(`Dialog type: ${dialog.type()}`);
        // await dialog.accept();
        await dialog.dismiss();
    });
    await page.locator("//button[@id='confirmButton']").click();

    //Prompt Alert
    page.on('dialog',async dialog=>{
        console.timeLog(`Dialog message: ${dialog.message()}`);
        console.log(`Dialog type: ${dialog.type()}`);
        await dialog.accept('Playwright User');

    });
    await page.locator("//button[@id='confirmButton']").click();
})