import { test, expect } from '@playwright/test';
import { DashboardPage } from '../../pages/DashboardPage';

test('Dashboard loads correctly', async ({ page }) => {
    const dashboardPage = new DashboardPage(page);

    await page.goto('/');

    await expect(dashboardPage.dashboardHeading).toBeVisible();

    await expect(dashboardPage.totalRevenue).toBeVisible();
    await expect(dashboardPage.totalOrders).toBeVisible();
    await expect(dashboardPage.pendingOrders).toBeVisible();
    await expect(dashboardPage.completedOrders).toBeVisible();

    await expect(dashboardPage.trendingImages).toHaveCount(10);
    for(let i = 0; i < 10; i++){
        await expect(dashboardPage.trendingImages.nth(i)).toBeVisible();
    }
 
    await expect(dashboardPage.inactiveCustomers).toBeVisible();
    await expect(dashboardPage.viewButton).toBeVisible();
    await expect(dashboardPage.followupPending).toBeVisible();
    await expect(dashboardPage.remindButton).toBeVisible();

    await expect(dashboardPage.customerVisitsChart).toBeVisible();
    await expect(dashboardPage.customerVisitsBars).toHaveCount(7);
    await expect(dashboardPage.customerVisitsValues).toHaveCount(7);

    await expect(dashboardPage.saleDetailsChart).toBeVisible();
    await expect(dashboardPage.saleDetailsChartPieSegment.first())
    .toBeVisible();

    await expect(dashboardPage.recentActivityHeader).toBeVisible();
    const count = await dashboardPage.recentActivityItems.count();
    expect(count).toBeGreaterThanOrEqual(5);
    
});