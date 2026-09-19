import {Page, Locator, expect} from '@playwright/test';

export class Sidebar{
    dashboardHeading: Locator;
    menuHeading: Locator;
    orderListHeading: Locator;
    customersHeading: Locator;
    loyaltyHeading: Locator;
    analyticsHeading: Locator;
    teamsHeading: Locator;
    settingsHeading: Locator;
    logo: Locator;
    menu: Locator;
    order: Locator;
    customers: Locator;
    loyalty: Locator;
    analytics: Locator;
    teams: Locator;
    settings: Locator;
    profileName: Locator;
    profileRole: Locator;
    logoutButton: Locator;


    constructor(private page: Page){
        this.dashboardHeading = this.page.getByRole('heading', { name: 'Dashboard' });

        this.menuHeading = this.page.getByRole('heading', { name: 'Menu', exact: true });
        this.orderListHeading = this.page.getByRole('heading', { name: 'Order List' });
        this.customersHeading = this.page.getByRole('heading', { name: 'Customer Intelligence', exact: true });
        this.loyaltyHeading = this.page.getByRole('heading', { name: 'Loyalty Program', exact: true });
        this.analyticsHeading = this.page.getByRole('heading', { name: 'Analytics', exact: true });
        this.teamsHeading = this.page.getByRole('heading', { name: 'Teams', exact: true });
        this.settingsHeading = this.page.getByRole('heading', { name: 'Settings', exact: true });

        this.logo = this.page.getByAltText('Snowy').first();
        this.menu = this.page.getByText('Menu').first();
        this.order = this.page.getByText('Order list').first();
        this.customers = this.page.getByText('Customers').first();
        this.loyalty = this.page.getByText('Loyalty').first();
        this.analytics = this.page.getByText('Analytics').first();
        this.teams = this.page.getByText('Teams').first();
        this.settings = this.page.getByText('Settings').first();

        this.profileName = this.page.locator('div.flex.flex-col.min-w-0 span')
            .first();

        this.profileRole = this.page.locator('div.flex.flex-col.min-w-0 span')
            .nth(1);

        this.logoutButton = this.page.getByRole('button',{name: 'Logout'}).first()
    }

    async verifyProfile(name: string, role: string){
        await expect(this.profileName).toHaveText(name);
        await expect(this.profileRole).toHaveText(role);
    }
}