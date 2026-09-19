import { test, expect } from '@playwright/test';
import { MenuPage } from '../../pages/MenuPage';
import { ProductDetailPage } from '../../pages/ProductDetailPage';

const product = {
    name: `Test Item ${Date.now()}`,
    price: '10',
    category: 'Test Category',
    status: 'available',
    imageURL: 'https://www.test.com/your-real-image.png',
    portion: 'Large',
    calories: '500',
    prepTime: '15',
    description: 'This is a test item.',
};


test('Menu page flow', async ({ page }) => {

    const menuPage = new MenuPage(page);
    const detail = new ProductDetailPage(page);
    /// navigates to  menu page
    await menuPage.goto();
    await expect(menuPage.menuHeader).toBeVisible();

    /// clicks add item form and fills form -> submits
    await menuPage.openAddItemForm();
    await menuPage.fillAddItemForm(product.name, product.price, product.category,
    product.status, product.imageURL, product.portion,
    product.calories, product.prepTime, product.description);
    await menuPage.saveItem();

   //verifies product is saved and visible in menu page
    await expect(menuPage.getAddedItem(product.name)).toBeVisible();

    //// clicks the added product card 
    const link = menuPage.getAddedItemLink(product.name);
    await link.click();
    await expect(page).toHaveURL(/\/menu\/.+/);

    //// validation in product detail page
    await expect(detail.getProductName(product.name)).toBeVisible();
    await expect(detail.getProductCategory(product.name)).toHaveText(product.category);
    await expect(detail.getDetailValue('Price')).toHaveText(`$${product.price}`);
    await expect(detail.getDetailValue('Portion')).toHaveText(product.portion);
    await expect(detail.getDetailValue('Calories')).toHaveText(`${product.calories} kcal`);
    await expect(detail.getDetailValue('Prep Time')).toHaveText(`${product.prepTime} min`);
    await expect(detail.getDetailValue('Description')).toHaveText(product.description);

    ///trending line
    await expect(detail.trendingHeader).toBeVisible();
    await expect.poll(() => detail.trendingProductCard.count())
                .toBeGreaterThan(2);
});