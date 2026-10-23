import { test } from '@playwright/test';

test('intro', async ({ page }) => {
    await page.goto('https://www.myntra.com/boy-tshirts');

    await page.waitForSelector(
        'xpath=//li[contains(@class,"product-base")]'
    );

    async function getMinimumPrice() {
        const pricesText = await page.locator(
            '//li[contains(@class,"product-base")]//div[@class="product-price"]//span[@class="product-discountedPrice" or (not(@class) and text())]'
        ).allInnerTexts();

        const prices = pricesText.map(a =>
            Number(a.replace(/[^\d]/g, '')));

        const minimumPrice = Math.min(...prices);

        console.log('Minimum T-shirt price:', minimumPrice);

        // Calling Function 2 inside Function 1
        const productNames = await getProductName(minimumPrice);

        console.log('Product name(s):', productNames);
        console.log('Returned minimum price:', minimumPrice);

    }
    async function getProductName(minPrice) {

        const productName = await page.locator(
            `//li[contains(@class,"product-base")]//div[@class="product-price"]//span[(@class="product-discountedPrice" or not(@class)) and normalize-space()="Rs. ${minPrice}"]/ancestor::div[@class="product-price"]/preceding-sibling::h4[@class="product-product"]`
        ).allInnerTexts();

        return productName;
    }

    // Calling Function 1
    await getMinimumPrice();


});
