import { test, expect } from '@playwright/test';
import { MenuPage } from '../../pages/MenuPage';


test('Menu page flow', async ({ page }) => {

    const menuPage = new MenuPage(page);
    const testName = `Test Item ${Date.now()}`;
    /// navigates to  menu page
    await menuPage.goto();
    await expect(menuPage.menuHeader).toBeVisible();

    /// clicks add item form and fills form -> submits
    await menuPage.openAddItemForm();
    await menuPage.fillAddItemForm(testName, '10', 'Test Category', 'Available', 'https://www.test.com/your-real-image.png', 'Large', '500', '15', 'This is a test item.');
    await menuPage.saveItem();

   //verifies product is saved and visible in menu page
    await expect(menuPage.getAddedItem(testName)).toBeVisible();

    //// clicks the added product card 
    const link = menuPage.getAddedItemLink(testName);
    await link.click();
    
    


});