import { Page } from "@playwright/test";

export abstract class BaseAdminComponent {
	constructor(protected readonly page: Page) {}

	protected async goToHomePage() {
		await this.page.goto("");
	}
}
