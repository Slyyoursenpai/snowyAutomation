import {Page, Locator, expect} from '@playwright/test';

export class ProductDetailPage{

    detailPageHeader: Locator;
    productName: Locator;
    productCategory: Locator;
    productCalories: Locator;
    productPortion: Locator;
    productPrepTime: Locator;
    productDescription: Locator;
    trendingHeader: Locator;
    trendingProductCard: Locator;


    constructor(private page: Page){
         
        this.detailPageHeader = this.page.getByRole('heading',{name: 'Menu Item'});
        this.productName = this.page.getByRole('heading');
    }

    getProductName(name: string): Locator{ 
        return this.productName.filter({hasText: name});
    }

}   