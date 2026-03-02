import { Locator, Page } from "@playwright/test";
import { BaseAdminComponent } from "./AdminBaseComponent";

export class AdminHeaderComponent extends BaseAdminComponent {
	// === Search ===
	protected readonly searchButton: Locator;

	// === View Website ===
	protected readonly viewWebsiteButton: Locator;

	// === Toggle Light/Dark mode ===
	protected readonly toggleDarkModeButton: Locator;
	protected readonly toggleLightModeButton: Locator;

	// === Notificiations ===
	protected readonly notificationsButton: Locator;

	constructor(protected readonly page: Page) {
		super(page);

		// === Search ===
		this.searchButton = this.page.getByRole("button", { name: "Search... Ctrl + K" });

		// === View website ===
		this.viewWebsiteButton = this.page.getByRole("link", { name: "View Website" });

		// === Toggle Light/Dark mode ===
		this.toggleDarkModeButton = this.page.getByRole("button", { name: "Switch to dark mode" });
		this.toggleLightModeButton = this.page.getByRole("button", { name: "Switch to light mode" });

		// === Notificiations ===
		this.notificationsButton = this.page.getByRole("button", { name: "Notifications", exact: true });
	}

	// === Search ===
	async clickSearchButton(): Promise<void> {
		await this.searchButton.click();
	}

	// === View Website ===
	async clickViewWebsiteButton(): Promise<void> {
		await this.viewWebsiteButton.click();
	}

	// === Toggle Light/Dark mode ===
	async clickToggleDarkModeButton(): Promise<void> {
		await this.toggleDarkModeButton.click();
	}

	async clickToggleLightModeButton(): Promise<void> {
		await this.toggleLightModeButton.click();
	}

	// === Notifications ===
	async clickNotificationsButton(): Promise<void> {
		await this.notificationsButton.click();
	}
}
