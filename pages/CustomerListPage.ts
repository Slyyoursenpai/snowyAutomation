import {Page, Locator} from '@playwright/test';

export class CustomerListPage{

    customerPageHeader: Locator;
    offerRiskButton: Locator;
    customerCard: Locator;
    accordionTrigger: Locator;
    spentValue: Locator;
    orderValue: Locator; 
    scoreValue: Locator;
    voucherSelect: Locator;
    sendOfferButton: Locator;
    sentButton: Locator;
    bulkSendPreview: Locator;
    confirmSendButton: Locator;
    customerSpending: Locator;


    constructor(private page: Page){ 
        this.customerPageHeader = this.page.getByRole('heading', {name: 'Customer Intelligence'});
        this.offerRiskButton = this.page.getByRole('button', {name: 'Send Offer to At-Risk Customers'});

        this.customerCard = this.page.locator('[data-slot="accordion"]').first();
        this.accordionTrigger = this.customerCard.locator('[data-slot="accordion-trigger"]');
        this.spentValue = this.customerCard.getByText('Spent', { exact: true }).locator('..').locator('p').last();
        this.orderValue = this.customerCard.getByText('Orders', { exact: true }).locator('..').locator('p').last();
        this.scoreValue = this.customerCard.getByText('Score', { exact: true }).locator('..').locator('span').last();
        this.voucherSelect = this.customerCard.locator('select');
        this.sendOfferButton = this.customerCard.getByRole('button', { name: 'Send Offer', exact: true });
        this.sentButton = this.customerCard.getByRole('button', { name: 'Sent', exact: false });
        this.bulkSendPreview = this.page.getByText('Bulk Send Preview');
        this.confirmSendButton = this.page.getByRole('button', { name: 'Confirm Send' });
        this.customerSpending = this.page.getByRole('heading',{name:'Customer Spending'});    
    }

    async goto(){
        await this.page.goto('/customers');
    }
}