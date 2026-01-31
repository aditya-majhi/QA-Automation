import { Page, Locator, expect } from '@playwright/test';

export class DashboardPage {
    constructor(private page: Page) { }
    get welcomeMessage(): Locator {
        return this.page.locator('#welcome-message');
    }

    get logoutButton(): Locator {
        return this.page.locator('#logout-button');
    }

    async verifyWelcomeMessage(expectedMessage: string): Promise<void> {
        await expect(this.welcomeMessage).toHaveText(expectedMessage);
    }

    async logout(): Promise<void> {
        await this.logoutButton.click();
        await expect(this.page).toHaveURL('/login');
    }

    async navigateTo(): Promise<void> {
        await this.page.goto('/dashboard');
    }

}