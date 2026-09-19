import {Page, Locator} from "@playwright/test";

export class DashboardPage{
    dashboardHeading: Locator;
    totalRevenue: Locator;
    totalOrders: Locator;
    pendingOrders: Locator;
    completedOrders: Locator;
    trendingImages: Locator;
    inactiveCustomers: Locator;
    viewButton: Locator;
    followupPending: Locator;
    remindButton: Locator;
    customerVisitsChart: Locator;
    customerVisitsBars: Locator;
    customerVisitsValues: Locator;
    saleDetailsChart: Locator;
    saleDetailsChartPieSegment: Locator;
    recentActivityHeader: Locator;
    recentActivityItems: Locator;

    constructor(private page: Page){
       // this.dashboardHeading = this.page.
        //getByText("Overview of your restaurant activity");

        this.dashboardHeading = this.page.
        getByRole('heading', { name: 'Dashboard' });

        this.totalRevenue = this.page.getByText("Total Revenue")
        .locator('..').locator('p').nth(1);
        this.totalOrders = this.page.getByText("Total Orders").locator('..')
        .locator('p').nth(1);
        this.pendingOrders = this.page.getByText("Pending Orders")
        .locator('..').locator('p').nth(1);
        this.completedOrders = this.page.getByText("Completed Orders")
        .locator('..').locator('p').nth(1);

        this.trendingImages = this.page.locator('a[href^="/menu/"] img');

        this.inactiveCustomers = this.page.getByText(/inactive customers/);
        this.viewButton = this.page.getByRole('button', {name: 'View'});

        this.followupPending = this.page.getByText(/follow-ups pending/);
        this.remindButton = this.page.getByRole('button', {name: 'Remind'});
        
        this.customerVisitsChart = this.page
        .locator('svg.recharts-surface').first();
        this.customerVisitsBars = this.page
        .locator('path.recharts-rectangle');
        this.customerVisitsValues = this.page
        .locator('svg.recharts-surface .recharts-label');

        this.saleDetailsChart = this.page
        .locator('svg.recharts-surface').nth(1);
        this.saleDetailsChartPieSegment = this.page
        .locator('svg.recharts-surface')
        .nth(1)
        .locator('path.recharts-sector');

        this.recentActivityHeader = this.page.getByText("Recent Activity");
        this.recentActivityItems = this.page.getByText("Recent Activity")
        .locator('..').locator('..').locator('[data-slot="item"]');
        
    }
}