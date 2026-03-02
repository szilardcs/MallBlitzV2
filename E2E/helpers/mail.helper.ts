export class MailHelper {
	constructor(private readonly request: any) {}

	async getVerificationLink(email: string): Promise<string> {
		// Get messages
		const messagesResponse = await this.request.get("http://16.16.128.139:8025/api/v1/messages");
		const messages = await messagesResponse.json();

		// Find message for email
		const message = messages.messages.find((msg: any) =>
			msg.To.some((recipient: any) => recipient.Address.toLowerCase() === email.toLowerCase()),
		);

		if (!message) throw new Error(`No message for ${email}`);

		// Get links
		const linksResponse = await this.request.get(
			`http://16.16.128.139:8025/api/v1/message/${message.ID}/link-check`,
		);
		const links = await linksResponse.json();

		// Find verification link
		const link = links.Links.find((link: any) => link.StatusCode === 302);
		if (!link) throw new Error("No verification link");

		return link.URL;
	}

	async getPasswordResetLink(email: string): Promise<string> {
		// Get messages
		const messagesResponse = await this.request.get("http://16.16.128.139:8025/api/v1/messages");
		const messages = await messagesResponse.json();

		// Find message for email
		const message = messages.messages.find((msg: any) =>
			msg.To.some((recipient: any) => recipient.Address.toLowerCase() === email.toLowerCase()),
		);

		if (!message) throw new Error(`No message for ${email}`);

		// Get links
		const linksResponse = await this.request.get(
			`http://16.16.128.139:8025/api/v1/message/${message.ID}/link-check`,
		);
		const links = await linksResponse.json();

		// Find password reset link
		const link = links.Links.find((link: any) => link.URL.includes("password-reset"));
		if (!link) throw new Error("No password reset link");

		return link.URL;
	}

	async waitForVerificationLink(email: string, maxAttempts = 10, intervalMs = 1000): Promise<string> {
		for (let i = 0; i < maxAttempts; i++) {
			try {
				return await this.getVerificationLink(email);
			} catch (error) {
				if (i === maxAttempts - 1) throw error;
				await new Promise((resolve) => setTimeout(resolve, intervalMs));
			}
		}
		throw new Error(`No verification link found after ${maxAttempts} attempts`);
	}

	async waitForPasswordResetLink(email: string, maxAttempts = 10, intervalMs = 1000): Promise<string> {
		for (let i = 0; i < maxAttempts; i++) {
			try {
				return await this.getPasswordResetLink(email);
			} catch (error) {
				if (i === maxAttempts - 1) throw error;
				await new Promise((resolve) => setTimeout(resolve, intervalMs));
			}
		}
		throw new Error(`No password reset link found after ${maxAttempts} attempts`);
	}
}
