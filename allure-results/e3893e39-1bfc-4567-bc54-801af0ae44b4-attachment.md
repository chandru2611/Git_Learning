# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Alerts.spec.js >> Handling JS Alerts
- Location: tests\Alerts.spec.js:3:5

# Error details

```
Error: dialog.dismiss: Cannot dismiss dialog which is already handled!
```

```
Error: locator.click: Test ended.
Call log:
  - waiting for locator('//button[@id=\'confirmButton\']')
    - locator resolved to <button type="button" id="confirmButton" class="btn btn-primary">Click me</button>

```

# Page snapshot

```yaml
- generic [ref=e2]:
  - banner [ref=e3]:
    - link [ref=e4] [cursor=pointer]:
      - /url: https://demoqa.com
  - generic [ref=e8]:
    - generic [ref=e11]:
      - generic [ref=e12]: Elements
      - generic [ref=e24]: Forms
      - generic [ref=e37]:
        - generic [ref=e38] [cursor=pointer]: Alerts, Frame & Windows
        - list [ref=e50]:
          - listitem [ref=e51] [cursor=pointer]:
            - link "Browser Windows" [ref=e52]:
              - /url: /browser-windows
          - listitem [ref=e55] [cursor=pointer]:
            - link "Alerts" [ref=e56]:
              - /url: /alerts
          - listitem [ref=e59] [cursor=pointer]:
            - link "Frames" [ref=e60]:
              - /url: /frames
          - listitem [ref=e63] [cursor=pointer]:
            - link "Nested Frames" [ref=e64]:
              - /url: /nestedframes
          - listitem [ref=e67] [cursor=pointer]:
            - link "Modal Dialogs" [ref=e68]:
              - /url: /modal-dialogs
      - generic [ref=e71]: Widgets
      - generic [ref=e84]: Interactions
      - generic [ref=e96]: Book Store Application
    - generic [ref=e109]:
      - heading "Alerts" [level=1] [ref=e110]
      - generic [ref=e111]:
        - generic [ref=e112]: Click Button to see alert
        - button "Click me" [active] [ref=e114] [cursor=pointer]
      - generic [ref=e115]:
        - generic [ref=e116]: On button click, alert will appear after 5 seconds
        - button "Click me" [ref=e118] [cursor=pointer]
      - generic [ref=e119]:
        - generic [ref=e120]: On button click, confirm box will appear
        - button "Click me" [ref=e122] [cursor=pointer]
      - generic [ref=e123]:
        - generic [ref=e124]: On button click, prompt box will appear
        - button "Click me" [ref=e126] [cursor=pointer]
  - contentinfo [ref=e133]:
    - generic [ref=e134]: © 2013-2026 TOOLSQA.COM | ALL RIGHTS RESERVED.
```

# Test source

```ts
  1  | import { test } from '@playwright/test';
  2  | 
  3  | test('Handling JS Alerts', async ({ page }) => {
  4  | 
  5  |     await page.goto('https://demoqa.com/alerts');
  6  | 
  7  |     //Simple Alert
  8  |     page.once('dialog', async dialog => {
  9  |         console.log(`Dialog message: ${dialog.message()}`);
  10 |         console.log(`Dialog type: ${dialog.type()}`);
  11 |         await dialog.accept();
  12 |         await dialog.dismiss();
  13 |     });
  14 | 
  15 |     await page.locator("//button[@id='alertButton']").click();
  16 | 
  17 |     //Confirm Alert
  18 |     page.once('dialog', async dialog => {
  19 |         console.log(`Dialog message: ${dialog.message()}`);
  20 |         console.log(`Dialog type: ${dialog.type()}`);
  21 |         // await dialog.accept();
  22 |         await dialog.dismiss();
  23 |     });
> 24 |     await page.locator("//button[@id='confirmButton']").click();
     |                                                         ^ Error: locator.click: Test ended.
  25 | 
  26 |     //Prompt Alert
  27 |     page.on('dialog',async dialog=>{
  28 |         console.timeLog(`Dialog message: ${dialog.message()}`);
  29 |         console.log(`Dialog type: ${dialog.type()}`);
  30 |         await dialog.accept('Playwright User');
  31 | 
  32 |     });
  33 |     await page.locator("//button[@id='confirmButton']").click();
  34 | })
```