import { Page, BrowserContext } from "@playwright/test";


export default class PlaywrightWrapper {

    constructor(public page: Page) { }

    async goto(url: string) {
        await this.page.goto(url, {
            waitUntil: "domcontentloaded"
        });
    }

    async waitAndClick(locator: string) {
        const element = this.page.locator(locator);
        await element.waitFor({
            state: "visible"
        });
        await element.click();
    }

    async navigateTo(link: string) {
        await Promise.all([
            this.page.waitForNavigation(),
            this.page.click(link)
        ])
    }

    async openNewtab(context: BrowserContext, locator: string) {
        if (!context) {
            throw new Error('Browser instance is undefined.');
          }
        const [newPage] = await Promise.all([
            context.waitForEvent('page', { timeout: 60000 }),
            this.page.locator(locator).click(),
          ]);
        return newPage;

        }

}
