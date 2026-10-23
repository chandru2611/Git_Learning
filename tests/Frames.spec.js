import{test} from '@playwright/test';

test('Nested Frames', async ({ page }) => {
    await page.goto("https://www.hyrtutorials.com/p/frames-practice.html");
    const frame1 = await page.frameLocator('#frm1');
    const frame2 = await page.frameLocator('#frm2');
    const frame3 = await page.frameLocator('#frm3');
    const frame3_1 = await frame3.frameLocator('#frm1');
    const frame3_2 = await frame3.frameLocator('#frm2');
    const frame3_3 = await frame3.frameLocator('#frm3');
    await page.locator('.frmTextBox').fill('Hello');
    await frame1.locator('#selectnav1').selectOption({ label: 'Tutorials' });
    await frame2.locator('#selectnav1').selectOption({ label: '- Java' });
    await frame2.locator('#englishchbx').check();
    await frame3.locator('.frmTextBox').fill('Pravin');
    await frame3_1.locator('#selectnav1').selectOption({ label: 'Menu' });
    await frame3_2.locator('#selectnav1').selectOption({ label: '- Telugu' });
})