import {Page, Locator, expect} from '@playwright/test';

export class MenuPage{

    addItemButton: Locator;
    menuHeader: Locator;
    addMenuItemText: Locator;
    nameInput: Locator;
    priceInput: Locator;
    categoryInput: Locator;
    availableDropdown: Locator;
    portionInput: Locator;
    caloriesInput: Locator;
    prepTimeInput: Locator;
    descriptionInput: Locator;
    addItemSaveButton: Locator;
    addedItem: Locator;
    addedItemLink: Locator;
    imageURLInput: Locator;
        
    
    constructor(private page: Page){
        this.menuHeader = this.page.getByRole('heading', { name: 'Menu', exact: true });
        this.addItemButton = this.page.getByRole('button', { name: '+ Add Item', exact: true });
        this.addMenuItemText = this.page.getByRole('heading', { name: 'Add Menu Item', exact: true });

        this.nameInput = this.page.getByPlaceholder('Name');
        this.priceInput = this.page.getByPlaceholder('Price');
        this.categoryInput = this.page.getByPlaceholder('Category');
        this.availableDropdown = this.page.getByRole('combobox');
        this.imageURLInput = this.page.getByPlaceholder('Image URL');
        this.portionInput = this.page.getByPlaceholder('Portion Size');
        this.caloriesInput = this.page.getByPlaceholder('Calories');
        this.prepTimeInput = this.page.getByPlaceholder('Prep Time');
        this.descriptionInput = this.page.getByPlaceholder('Description');

        this.addItemSaveButton = this.page.getByRole('button', { name: 'Add Item', exact: true });

        this.addedItem = this.page.locator('[data-slot="card"]');
        this.addedItemLink = this.page.locator('a[href^="/menu/"]');

}
    async goto(){
        await this.page.goto('/menu');
    }

    async openAddItemForm(){
        await this.addItemButton.click();
        await expect(this.addMenuItemText).toBeVisible();
    }

    async fillAddItemForm(name: string, price: string, category: string, status: string, imageURL: string, portion: string, calories: string, prepTime: string, description: string){
        await this.nameInput.fill(name);
        await this.priceInput.fill(price);
        await this.categoryInput.fill(category);
        await this.availableDropdown.selectOption(status);
        await this.imageURLInput.fill(imageURL);
        await this.portionInput.fill(portion);
        await this.caloriesInput.fill(calories);
        await this.prepTimeInput.fill(prepTime);
        await this.descriptionInput.fill(description);
    }

    async saveItem(){
        await this.addItemSaveButton.click();
    }

    getAddedItem(name: string): Locator{
        return this.addedItem.filter({ hasText: name });
    }

    getAddedItemLink(name: string): Locator {
        return this.addedItemLink.filter({hasText: name});
    }
}