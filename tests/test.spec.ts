import { expect, test } from '@playwright/test';
import { LoginPage } from '../pages/client/Login';
import { DashboardPage } from '../pages/client/Dashboard';
import { Navbar } from '../pages/client/Navbar';

test.describe('Client Application E2E Tests', () => {
    let loginPage: LoginPage;
    let dashboardPage: DashboardPage;
    let navbar: Navbar;

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        dashboardPage = new DashboardPage(page);
        navbar = new Navbar(page);
        await loginPage.navigateTo();
    });

    test('Login with valid credentials', async () => {
        await loginPage.login(process.env.USER || '', process.env.PASSWORD || '');
        await dashboardPage.verifyWelcomeMessage('Welcome, validUser!');
    });

    test('Navigate to Profile from Navbar', async ({ page }) => {
        await loginPage.login(process.env.USER || '', process.env.PASSWORD || '');
        await navbar.navigateToProfile();
        await expect(page).toHaveURL('/profile');
    });
    test('Logout from Dashboard', async ({ page }) => {
        await loginPage.login(process.env.USER || '', process.env.PASSWORD || '');
        await dashboardPage.logout();
        await expect(page).toHaveURL('/login');
    });

    test('Click Forget Password link', async ({ page }) => {
        await loginPage.clickForgetPassword();
        await expect(page).toHaveURL('/forget-password');
    });


});