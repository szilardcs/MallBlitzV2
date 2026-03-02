import { test as base } from "@playwright/test";
import { MailHelper } from "../helpers/mail.helper";
import PomManager from "../pages/ManagePage";

type Fixture = {
	pomManager: PomManager;
	mailHelper: MailHelper;
};

export const test = base.extend<Fixture>({
	pomManager: async ({ page }, use) => {
		await use(new PomManager(page));
	},

	mailHelper: async ({ request }, use) => {
		await use(new MailHelper(request));
	},
});

export { expect } from "@playwright/test";
