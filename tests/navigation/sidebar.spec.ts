import { test, expect } from '@playwright/test';
import { Sidebar } from '../../pages/Sidebar';

test('Sidebar navigates correctly', async ({ page }) => {
    const sideBar = new Sidebar(page);

    await page.goto('/');
        //todo : add the pages load apart fromtthe url
    // Dashboard
    await expect(sideBar.dashboardHeading).toBeVisible();
    await expect(page).toHaveURL('/');
    
    // Side Bar Logo
    await expect(sideBar.logo).toBeVisible();

    // Menu
    await expect(sideBar.menu).toBeVisible();
    await sideBar.menu.click();
    await expect(page).toHaveURL('/menu');
    await expect(sideBar.menuHeading).toBeVisible();

    // Orders
    await expect(sideBar.order).toBeVisible();
    await sideBar.order.click();
    await expect(page).toHaveURL('/orders');
    await expect(sideBar.orderListHeading).toBeVisible();

    // Customers
    await expect(sideBar.customers).toBeVisible();
    await sideBar.customers.click();
    await expect(page).toHaveURL('/customers');
    await expect(sideBar.customersHeading).toBeVisible();

    // Loyalty
    await expect(sideBar.loyalty).toBeVisible();
    await sideBar.loyalty.click();
    await expect(page).toHaveURL('/loyaltyprogram');
    await expect(sideBar.loyaltyHeading).toBeVisible();

    // Analytics
    await expect(sideBar.analytics).toBeVisible();
    await sideBar.analytics.click();
    await expect(page).toHaveURL('/analytics');
    await expect(sideBar.analyticsHeading).toBeVisible();

    // Teams
    await expect(sideBar.teams).toBeVisible();
    await sideBar.teams.click();
    await expect(page).toHaveURL('/teams');
    await expect(sideBar.teamsHeading).toBeVisible();

    // Settings
    await expect(sideBar.settings).toBeVisible();
    await sideBar.settings.click();
    await expect(page).toHaveURL('/settings');
    await expect(page.getByRole('heading', { name: 'Settings', exact: true })).toBeVisible();

    //Profile Name and Role
    await sideBar.verifyProfile(process.env.TEST_PROFILE_NAME!, process.env.TEST_PROFILE_ROLE!);

    // Logout
    await expect(sideBar.logoutButton).toBeVisible();
    await sideBar.logoutButton.click();

    // Logout Verification
    await expect(page).toHaveURL('/login');
});