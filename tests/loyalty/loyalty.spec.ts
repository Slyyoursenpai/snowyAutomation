import { test, expect } from '@playwright/test';
import { LoyaltyPage } from '../../pages/LoyaltyPage';

test('Loyalty page flow', async ({ page }) => {
    const loyaltyPage = new LoyaltyPage(page);
    const STAT_LABELS = ['Total Members', 'Stamps Given', 'Rewards Available', 'Rewards Redeemed'];
    
    await loyaltyPage.goto();
    await expect(loyaltyPage.loyaltyPageHeader).toBeVisible();

    for (const label of STAT_LABELS) {
    await expect(loyaltyPage.getStatLabel(label)).toBeVisible();
    await expect(loyaltyPage.getStatValue(label)).toHaveText(/^\d+$/);

    await expect(loyaltyPage.qrHeader).toBeVisible();
    await expect(loyaltyPage.qrCode).toBeVisible();
    await expect(loyaltyPage.generateQRButton).toBeVisible();
  //  loyaltyPage.generateQRButton.click();
    await expect(loyaltyPage.downloadQRButton).toBeVisible();
    loyaltyPage.downloadQRButton.click();

}

});