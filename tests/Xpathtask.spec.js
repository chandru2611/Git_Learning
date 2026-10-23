import { test } from '@playwright/test';

test('Xpath Learning', async ({ page }) => {

    // await page.goto('https://www.myntra.com/men-tshirts');

    // const products = page.locator(
    //     "//ul[contains(@class,'results-base')]/li[contains(@class,'product-base')]");

    //const count = await products.count();

    //console.log("Total numbers", count);
    // for (let i = 0; i < count; i++) {
    //     const product = products.nth(i);
    //     console.log(`Product ${i + 1}`);

    //     console.log(await product.innerText());

    // }

    // Using For Loop
    // let minPrice = Infinity;

    // for (let i = 0; i < price; i++) {
    //     const priceText = await discount.nth(i).textContent();
    //     const prices = Number(priceText.replace(/[^\d]/g, ""));

    //     if (prices < minPrice) {
    //         minPrice = price;
    //     }
    // }

    // console.log("Minimum price: ₹" + minPrice);


    // Task 3: Find the product with the lowest discounted price

    await page.goto('https://www.myntra.com/men-tshirts');

    const priceList = page.locator(
        '//li[@class="product-base"]//span[@class="product-discountedPrice"]');

    console.log('Discounted price count:', await priceList.count());

    const prices = (await priceList.allTextContents())
        .map(p => Number(p.replace(/[^\d]/g, '')))
        .filter(p => p > 0);

    console.log('Extracted prices:', prices);

    if (prices.length === 0) {
        console.log('No prices found. Check the XPath or page loading.');
        return;
    }

    const minimumPrice = Math.min(...prices);

    console.log('Least Price:', minimumPrice);

    // const productName = page.locator(
    //     `//li[@class="product-base"]//span[@class="product-discountedPrice" and normalize-space()="Rs. ${minimumPrice}"]/ancestor::div[@class="product-productMetaInfo"]//h4[@class="product-product"]`
    // ).first();

    const productName = page.locator(`//li[@class="product-base"]//div[@class="product-price"]//span[(@class="product-discountedPrice" or not(@class)) and normalize-space()="Rs. ${minimumPrice}"]/ancestor::div[@class="product-productMetaInfo"]//h4[@class="product-product"]`
    ).first();
        

    console.log('Product Name:', await productName.innerText());
})

// Task 4: Find the Product which is having no discounted price

// await page.goto('https://www.myntra.com/boy-tshirts');

// const products = page.locator(
//     '//li[contains(@class,"product-base")]');

// const totalProducts = await products.count();

// const discountedProducts = page.locator(
//     '//li[contains(@class,"product-base")]//span[contains(@class,"product-discountedPrice")]');

// const discountedCount = await discountedProducts.count();

// const productsWithoutDiscount = page.locator(
//     '//li[contains(@class,"product-base") and not(.//span[contains(@class,"product-discountedPrice")])]');

// console.log('Total Products:', totalProducts);
// console.log('Products with Discounted Price:', discountedCount);
// console.log('Products without Discounted Price:', await productsWithoutDiscount.count());

// console.log(
//     'Products without Discounted Price Names:',
//     await productsWithoutDiscount.locator(
//         'xpath=.//h4[contains(@class,"product-product")]'
//     ).allInnerTexts()
// );
