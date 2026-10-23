const { test } = require('@playwright/test');

test('Least price T-shirt', async ({ page }) => {

    await page.goto('https://www.myntra.com/boy-tshirts');

    const products = await page.locator(
        '//li[contains(@class,"product-base")]'
    ).all();

    const productDetails = await Promise.all(
        products.map(async (product) => {

            const priceText = await product.locator(
                'xpath=.//span[contains(@class,"product-discountedPrice")]'
            ).textContent();

            const name = await product.locator(
                'xpath=.//h4[contains(@class,"product-product")]'
            ).innerText();

            const price = Number(
                priceText.replace(/[^\d]/g, '')
            );

            return { name, price };
        })
    );

    const cheapest = productDetails.reduce((min, current) =>
        current.price < min.price ? current : min
    );

    console.log('Least Price:', cheapest.price);
    console.log('Product Name:', cheapest.name);

    await page.waitForTimeout(5000);
});