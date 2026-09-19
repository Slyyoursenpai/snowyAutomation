import {test} from '@playwright/test';
import {login} from '../helpers/login';

test('Setup authentication', async ({ page }) => {
    await login(page);
    await page.context().storageState({ path: 'auth/owner.json' });
});