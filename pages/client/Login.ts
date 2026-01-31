import { Page, Locator, expect } from '@playwright/test';

export class LoginPage {
    constructor(private page: Page) { }

    get usernameInput(): Locator {
        return this.page.locator('#username');
    }

    get passwordInput(): Locator {
        return this.page.locator('#password');
    }

    get loginButton(): Locator {
        return this.page.locator('#login-button');
    }

    getForgetPasswordLink(): Locator {
        return this.page.locator('a#forget-password');
    }

    async login(username: string, password: string): Promise<void> {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
        await expect(this.page).toHaveURL('/dashboard');
    }

    async clickForgetPassword(): Promise<void> {
        await this.getForgetPasswordLink().click();
        await expect(this.page).toHaveURL('/forget-password');
    }

    async navigateTo(): Promise<void> {
        await this.page.goto('/login');
    }
}