import { test, expect } from '@playwright/test';
import { OrderListPage } from '../../pages/OrderListPage';

test('Order List page flow', async ({ page }) => {
    
    const orderPage = new OrderListPage(page);

    await orderPage.goto();

    await expect(orderPage.orderListHeader).toBeVisible();
    await expect(orderPage.orderCard.first()).toBeVisible();
    await expect(orderPage.orderCard.first()).toContainText('Customer: ');
    await expect(orderPage.orderCardTitle.first()).toHaveText(/^Order #/);
    await expect(orderPage.orderBadge.first()).toHaveText(/^(completed|pending|cancelled)$/);
    await expect(orderPage.orderContent.first()).toContainText(/\$/);
});