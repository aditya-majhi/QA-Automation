import { Page, Locator, expect } from '@playwright/test';

export class Navbar {
    constructor(private page: Page) { }

    get homeLink(): Locator {
        return this.page.locator('a#home-link');
    }

    get profileLink(): Locator {
        return this.page.locator('a#profile-link');
    }

    get settingsLink(): Locator {
        return this.page.locator('a#settings-link');
    }

    async navigateToHome(): Promise<void> {
        await this.homeLink.click();
        await expect(this.page).toHaveURL('/home');
    }

    async navigateToProfile(): Promise<void> {
        await this.profileLink.click();
        await expect(this.page).toHaveURL('/profile');
    }

    async navigateToSettings(): Promise<void> {
        await this.settingsLink.click();
        await expect(this.page).toHaveURL('/settings');
    }

    async navigateTo(): Promise<void> {
        await this.page.goto('/');
    }
}