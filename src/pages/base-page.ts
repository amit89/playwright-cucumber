import { Page } from "@playwright/test";

export default class BasePage {
  constructor(public page: Page) {
    this.page = page;
  }
}
