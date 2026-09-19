import { Page, Locator, expect } from "@playwright/test";

export class LoginPage{
    logo: Locator;
    emailInput: Locator;
    passwordInput: Locator;
    loginButton: Locator;

    constructor(private page: Page){
        this.logo = this.page.getByAltText('Snowy Restaurant CRM');
        this.emailInput = this.page.locator('input[type="email"]');
        this.passwordInput = this.page.locator('input[type="password"]');
        this.loginButton = this.page.getByRole('button', {name: 'Login'});
    }

    async goto(){
        await this.page.goto('/login');
    }

    async verifyLogo(){
        await expect(this.logo).toBeVisible();
    }

    async login(email: string, password: string){
        await this.emailInput.fill(email);
        await this.passwordInput.fill(password);
        await this.loginButton.click();

        await this.page.waitForURL('/');
    }

    async verifyRestaurantLogin(restaurantName:string){
       const restaurant = this.page.getByText(restaurantName, {exact: true})
        .first();

        console.log("Restaurant name:", await restaurant.textContent());
        
        await expect(restaurant).toBeVisible();

    }
}