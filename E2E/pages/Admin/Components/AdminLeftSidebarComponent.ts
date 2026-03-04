import { Locator, Page } from "@playwright/test";
import { BaseAdminComponent } from "./AdminBaseComponent";

export class AdminLeftSideBarComponent extends BaseAdminComponent {
	// === Sidebar toggle ===
	protected readonly toggleSidebarButton: Locator;

	// === Dashboard ===
	protected readonly dashboardButton: Locator;

	// === Inbox ===
	protected readonly inboxButton: Locator;

	// === Users ===
	protected readonly usersButton: Locator;

	// === Products ===
	protected readonly productsButton: Locator;
	protected readonly allProductsButton: Locator;
	protected readonly addProductButton: Locator;
	protected readonly categoriesButton: Locator;
	protected readonly brandsButton: Locator;
	protected readonly attributeSetsButton: Locator;
	protected readonly attributesButton: Locator;

	// === Blog ===
	protected readonly blogButton: Locator;
	protected readonly postsButton: Locator;
	protected readonly blogCategoriesButton: Locator;
	protected readonly tagsButton: Locator;

	// === Media ===
	protected readonly mediaButton: Locator;

	// === Settings ===
	protected readonly settingsButton: Locator;
	protected readonly generalButton: Locator;
	protected readonly membersButton: Locator;
	protected readonly notificationsButton: Locator;
	protected readonly securityButton: Locator;

	// === Metadata ===
	protected readonly metadataButton: Locator;

	// === Translations ===
	protected readonly translationsButton: Locator;

	// === System ===
	protected readonly systemButton: Locator;
	protected readonly cacheManagementButton: Locator;
	protected readonly systemInformation: Locator;
	protected readonly healthCheckButton: Locator;

	// === Admin profile ===
	protected readonly adminUserButton: Locator;
	protected readonly adminProfileButton: Locator;
	protected readonly signOutButton: Locator;

	constructor(protected readonly page: Page) {
		super(page);

		// === Sidebar toggle ===
		this.toggleSidebarButton = this.page.getByRole("button", { name: "Toggle sidebar" });

		// === Dashboard ===
		this.dashboardButton = this.page.getByRole("link", { name: "Dashboard" });

		// === Inbox ===
		this.inboxButton = this.page.locator(".nav-item").filter({ hasText: "Inbox" });

		// === Users ===
		this.usersButton = this.page.getByRole("link", { name: "Users" });

		// === Products ===
		this.productsButton = this.page.getByRole("button", { name: "Products" });
		this.allProductsButton = this.page.getByRole("link", { name: "All Products" });
		this.addProductButton = this.page.getByRole("link", { name: "Add Product" });
		this.categoriesButton = this.page.getByRole("link", { name: "Categories" });
		this.brandsButton = this.page.getByRole("link", { name: "Brands" });
		this.attributeSetsButton = this.page.getByRole("link", { name: "Attribute Sets" });
		this.attributesButton = this.page.getByRole("link", { name: "Attributes" });

		// === Blog ===
		this.blogButton = this.page.getByRole("button", { name: "Blog" });
		this.postsButton = this.page.getByRole("link", { name: "Posts" });
		this.blogCategoriesButton = this.page.getByRole("link", { name: "Blog Categories" });
		this.tagsButton = this.page.getByRole("link", { name: "Tags" });

		// === Media ===
		this.mediaButton = this.page.getByRole("link", { name: "Media" });

		// === Settings ===
		this.settingsButton = this.page.getByRole("button", { name: "Settings" });
		this.generalButton = this.page.getByRole("link", { name: "General" });
		this.membersButton = this.page.getByRole("link", { name: "Members" });
		this.notificationsButton = this.page.getByRole("link", { name: "Notifications", exact: true });
		this.securityButton = this.page.getByRole("link", { name: "Security" });

		// === Metadata ===
		this.metadataButton = this.page.getByRole("link", { name: "Metadata" });

		// === Translations ===
		this.translationsButton = this.page.getByRole("link", { name: "Translations" });

		// === System ===
		this.systemButton = this.page.getByRole("button", { name: "System" });
		this.cacheManagementButton = this.page.getByRole("link", { name: "Cache Management" });
		this.systemInformation = this.page.getByRole("link", { name: "System Information" });
		this.healthCheckButton = this.page.getByRole("link", { name: "Health Check" });

		// === Admin profile ===
		this.adminUserButton = this.page.getByRole("generic", { name: "Profile" });
		this.adminProfileButton = this.page.getByRole("menuitem", { name: "Profile" });
		this.signOutButton = this.page.getByRole("menuitem", { name: "Sign out" });
	}

	// === Sidebar toggle ===
	async toggleSidebar(): Promise<void> {
		await this.toggleSidebarButton.click();
	}

	// === Dashboard ===
	async clickDashboardButton(): Promise<void> {
		await this.dashboardButton.click();
	}

	// === Inbox ===
	async clickInboxButton(): Promise<void> {
		await this.inboxButton.click();
	}

	// === Users ===
	async clickUsersButton(): Promise<void> {
		await this.usersButton.click();
	}

	// === Products (Dropdown) ===
	async expandProductsDropdown(): Promise<void> {
		await this.productsButton.click();
	}

	async clickAllProductsButton(): Promise<void> {
		await this.expandProductsDropdown();
		await this.allProductsButton.click();
	}

	async clickAddProductButton(): Promise<void> {
		await this.expandProductsDropdown();
		await this.addProductButton.click();
	}

	async clickCategoriesButton(): Promise<void> {
		await this.expandProductsDropdown();
		await this.categoriesButton.click();
	}

	async clickBrandsButton(): Promise<void> {
		await this.expandProductsDropdown();
		await this.brandsButton.click();
	}

	async clickAttributeSetsButton(): Promise<void> {
		await this.expandProductsDropdown();
		await this.attributeSetsButton.click();
	}

	async clickAttributesButton(): Promise<void> {
		await this.expandProductsDropdown();
		await this.attributesButton.click();
	}

	// === Blog (Dropdown) ===
	async expandBlogDropdown(): Promise<void> {
		await this.blogButton.click();
	}

	async clickPostsButton(): Promise<void> {
		await this.expandBlogDropdown();
		await this.postsButton.click();
	}

	async clickBlogCategoriesButton(): Promise<void> {
		await this.expandBlogDropdown();
		await this.blogCategoriesButton.click();
	}

	async clickTagsButton(): Promise<void> {
		await this.expandBlogDropdown();
		await this.tagsButton.click();
	}

	// === Media ===
	async clickMediaButton(): Promise<void> {
		await this.mediaButton.click();
	}

	// === Settings (Dropdown) ===
	async expandSettingsDropdown(): Promise<void> {
		await this.settingsButton.click();
	}

	async clickGeneralButton(): Promise<void> {
		await this.expandSettingsDropdown();
		await this.generalButton.click();
	}

	async clickMembersButton(): Promise<void> {
		await this.expandSettingsDropdown();
		await this.membersButton.click();
	}

	async clickNotificationsButton(): Promise<void> {
		await this.expandSettingsDropdown();
		await this.notificationsButton.click();
	}

	async clickSecurityButton(): Promise<void> {
		await this.expandSettingsDropdown();
		await this.securityButton.click();
	}

	// === Metadata ===
	async clickMetadataButton(): Promise<void> {
		await this.metadataButton.click();
	}

	// === Translations ===
	async clickTranslationsButton(): Promise<void> {
		await this.translationsButton.click();
	}

	// === System (Dropdown) ===
	async expandSystemDropdown(): Promise<void> {
		await this.systemButton.click();
	}

	async clickCacheManagementButton(): Promise<void> {
		await this.expandSystemDropdown();
		await this.cacheManagementButton.click();
	}

	async clickSystemInformationButton(): Promise<void> {
		await this.expandSystemDropdown();
		await this.systemInformation.click();
	}

	async clickHealthCheckButton(): Promise<void> {
		await this.expandSystemDropdown();
		await this.healthCheckButton.click();
	}

	// === Admin profile ===
	async clickAdminUserButton(): Promise<void> {
		await this.adminUserButton.click();
	}

	async clickAdminProfileButton(): Promise<void> {
		await this.adminProfileButton.click();
	}

	async clickSignOutButton(): Promise<void> {
		await this.signOutButton.click();
	}
}
