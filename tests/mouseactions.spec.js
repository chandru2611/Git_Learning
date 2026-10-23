import { test } from '@playwright/test';

test('Mouse actions', async({page})=>{
    await page.goto('https://jqueryui.com/droppable/');
    await page.waitForTimeout(3000);
    await page.mouse.wheel(0,800);

   // await page.goto('https://jqueryui.com/droppable/');
    await page.locator('#draggable').dragTo(await page.locator('#droppable'));

    await page.locator('#draggable').hover();
    await page.mouse.down();
    await page.locator('#droppable').hover();
    await page.mouse.up();


})