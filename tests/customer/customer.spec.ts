import { test, expect } from '@playwright/test';
import { CustomerListPage } from '../../pages/CustomerListPage';

test('Customer List page flow', async ({ page }) => {
    const dialogMessages: string[] = [];
    page.on('dialog', async (dialog) => {
        dialogMessages.push(dialog.message());
        await dialog.accept();
    })

    const customerPage = new CustomerListPage(page);
    await customerPage.goto();
    await expect(customerPage.customerPageHeader).toBeVisible();
    await customerPage.offerRiskButton.click();

    if(dialogMessages.length>0){
        await expect(dialogMessages[0]).toMatch(/no at[- ]?risk/i);
    } else {
        await expect(customerPage.bulkSendPreview).toBeVisible();
        await expect(customerPage.confirmSendButton).toBeVisible();
        await customerPage.confirmSendButton.click();
    }

    await expect(customerPage.spentValue).toBeVisible();
    await expect(customerPage.spentValue).toHaveText(/\$\d+/);
    await expect(customerPage.orderValue).toBeVisible();
    await expect(customerPage.orderValue).toHaveText(/^\d+$/);

    await customerPage.accordionTrigger.click();
    await expect(customerPage.scoreValue).toBeVisible();
    await expect(customerPage.scoreValue).toHaveText(/^\d+$/);

    await customerPage.sendOfferButton.click();
    await expect(dialogMessages[1]).toContain('Please select a voucher first');

    await customerPage.voucherSelect.selectOption('SAVE200');
    await customerPage.sendOfferButton.click();
    await expect(customerPage.sentButton).toBeVisible();

    await expect(customerPage.customerSpending).toBeVisible();
});