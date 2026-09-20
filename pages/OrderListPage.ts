import {Page, Locator} from '@playwright/test';

export class OrderListPage{

    orderListHeader: Locator;
    orderCard: Locator;
    orderCardTitle: Locator;
    orderBadge: Locator;
    orderContent: Locator;

    constructor(private page: Page){ 
        this.orderListHeader = this.page.getByRole('heading', {name: 'Order List'});
        this.orderCard = this.page.locator('[data-slot="card"]');
        this.orderCardTitle = this.page.locator('[data-slot="card-title"]');
        this.orderBadge = this.page.locator('[data-slot="badge"]');
        this.orderContent = this.page.locator('[data-slot="card-content"]');
    }

    async goto(){
        await this.page.goto('/orders');
    }
}