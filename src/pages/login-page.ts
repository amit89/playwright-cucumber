import BasePage from "./base-page";
import { Page } from "@playwright/test";

export default class LoginPage extends BasePage {
  constructor(public page: Page) {
    super(page);
  }
}
