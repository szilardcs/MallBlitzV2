import { Locator, Page, expect } from "@playwright/test";
import { BaseAdminComponent } from "./AdminBaseComponent";

const statusRank = {
	verified: 1,
	pending: 2,
};

type StatusKey = keyof typeof statusRank;

export class AdminTable extends BaseAdminComponent {
	protected readonly colID: Locator;
	protected readonly colUser: Locator;
	protected readonly colEmail: Locator;
	protected readonly colStatus: Locator;
	protected readonly colJoinDate: Locator;

	constructor(protected readonly page: Page) {
		super(page);

		this.colID = this.page.locator('[data-column="id"]');
		this.colUser = this.page.locator('[data-column="name"]');
		this.colEmail = this.page.locator('[data-column="email"]');
		this.colStatus = this.page.locator('[data-column="email_verified_at"]');
		this.colJoinDate = this.page.locator('[data-column="created_at"]');
	}

	async expectColumnOrdered(values: any[], direction: "asc" | "desc"): Promise<void> {
		for (let i = 0; i < values.length - 1; i++) {
			const current = values[i];
			const next = values[i + 1];

			if (direction === "asc") {
				expect(current).toBeLessThanOrEqual(next);
			} else {
				expect(current).toBeGreaterThanOrEqual(next);
			}
		}
	}

	// === ID ===
	async expectColumnIDToBeSorted(direction: "asc" | "desc"): Promise<void> {
		const values = await this.colID.allInnerTexts();
		const normalized = values.map((v) => Number(v.trim()));

		await this.expectColumnOrdered(normalized, direction);
	}

	// === User ===
	async expectColumnUserToBeSorted(direction: "asc" | "desc"): Promise<void> {
		const values = await this.colUser.allInnerTexts();
		const normalized = values.map((v) => v.trim().toLowerCase());

		await this.expectColumnOrdered(normalized, direction);
	}

	// === Status ===

	async expectColumnStatusToBeSorted(direction: "asc" | "desc"): Promise<void> {
		const values = await this.colStatus.allInnerTexts();
		const normalized = values.map((v) => {
			const status = v.trim().toLowerCase() as StatusKey;
			return statusRank[status];
		});

		await this.expectColumnOrdered(normalized, direction);
	}

	// === Join date ===
	async expectColumnJoinDateToBeSorted(direction: "asc" | "desc"): Promise<void> {
		const values = await this.colJoinDate.allInnerTexts();

		const normalized = values.map((v) => {
			const [m, d, y] = v.split("/");
			return new Date(`${y}-${m}-${d}`).getTime();
		});

		await this.expectColumnOrdered(normalized, direction);
	}
}
