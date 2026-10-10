import {Page, Locator} from '@playwright/test';

export class LoyaltyPage{

    loyaltyPageHeader: Locator;
    qrHeader: Locator;
    qrCode: Locator;
    generateQRButton: Locator;
    downloadQRButton: Locator;



    constructor(private page: Page){ 
        this.loyaltyPageHeader = this.page.getByRole('heading', {name: 'Loyalty Program'});
        this.qrHeader = this.page.getByRole('heading', {name: 'QR Code'});
        this.qrCode = this.page.locator('#loyalty-qr-code');
        this.generateQRButton = this.page.getByRole('button', {name: 'Generate QR'});
        this.downloadQRButton = this.page.getByRole('button', {name: 'Download'});

    }

    async goto(){
        await this.page.goto('/loyaltyprogram');
    }  

    getStatLabel(label: string): Locator{
        return this.page.getByText(label, { exact: true });
    }

    getStatValue(label: string): Locator {
        return this.page.getByText(label, { exact: true })
        .locator('..').locator('p').last();
    }
}