import {Page, Locator, expect} from '@playwright/test';

export class ProductDetailPage{

    detailPageHeader: Locator;
    productName: Locator;
    trendingHeader: Locator;
    trendingProductCard: Locator;

    constructor(private page: Page){
        this.detailPageHeader = this.page.getByRole('heading',{name: 'Menu Item'});
        this.productName = this.page.getByRole('heading');
        this.trendingHeader= this.page.getByRole('heading', {name: 'Trending Items'});
        this.trendingProductCard = this.page.locator('[data-slot="card"]');
    }

    getProductName(name: string): Locator{ 
        return this.productName.filter({hasText: name});
    }

    getProductCategory(name: string): Locator {
        return this.getProductName(name).locator('..').locator('p').first();
    }

    getDetailValue(label: string): Locator{
        return this.page.getByText(label,{exact: true})
        .locator('..').locator('p').nth(1);
    }

}   