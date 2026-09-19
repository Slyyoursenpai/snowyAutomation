import { test, expect } from '@playwright/test';
import { MenuPage } from '../../pages/MenuPage';

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
    
    


});