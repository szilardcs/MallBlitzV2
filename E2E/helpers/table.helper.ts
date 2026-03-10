import { expect, Page } from "@playwright/test";

async function expectColumnOrdered(values: any[], direction: "asc" | "desc") {
	for (let i = 0; i < values.length - 1; i++) {
		const current = values[i];
		const next = values[i + 1];

		if (direction === "asc") {
			expect(current).toBeGreaterThanOrEqual(next);
		} else {
			expect(current).toBeLessThanOrEqual(next);
		}
	}
}

// === ID ===
export async function expectCoulmnIDToBeSorted(page: Page, direction: "asc" | "desc") {
	const values = await page.locator("tbody tr td:nth-child(1)").allInnerTexts();
	const normalized = values.map((v) => Number(v.trim()));

	await expectColumnOrdered(normalized, direction);
}

// === User ===
export async function expectColumnUserToBeSorted(page: Page, direction: "asc" | "desc") {
	const values = await page.locator("tbody tr td:nth-child(2)").allInnerTexts();
	const normalized = values.map((v) => v.trim().toLowerCase());

	await expectColumnOrdered(normalized, direction);
}

// === Status ===
const statusRank = {
	verified: 1,
	pending: 2,
};

type StatusKey = keyof typeof statusRank;

export async function expectColumnStatusToBeSorted(page: Page, direction: "asc" | "desc") {
	const values = await page.locator("tbody tr td:nth-child(4)").allInnerTexts();
	const normalized = values.map((v) => {
		const status = v.trim().toLowerCase() as StatusKey;
		return statusRank[status];
	});

	await expectColumnOrdered(normalized, direction);
}

// === Join date ===
export async function expectColumnJoinDateToBeSorted(page: Page, direction: "asc" | "desc") {
	const values = await page.locator("tbody tr td:nth-child(5)").allInnerTexts();

	const normalized = values.map((v) => {
		const [m, d, y] = v.split("/");
		return new Date(`${y}-${m}-${d}`).getTime();
	});

	await expectColumnOrdered(normalized, direction);
}
