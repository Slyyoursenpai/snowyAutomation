import {test} from '@playwright/test';
import {LoginPage} from '../../pages/LoginPage'

test.use({ storageState: {cookies: [], origins: [] }});

test('Login Test', async ({page}) => {
   
    const email = process.env.TEST_EMAIL;
    const password = process.env.TEST_PASSWORD;
    const restaurantName = "Devil's Kitchen";

   const loginPage = new LoginPage(page);
   
   await loginPage.goto();
   await loginPage.verifyLogo();

   await loginPage.login(email, password);
   await loginPage.verifyRestaurantLogin(restaurantName);
});