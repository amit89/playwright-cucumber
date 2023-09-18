import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";
import { chromium, Page, Browser, expect, APIResponse } from "@playwright/test";
import { APIRequestContext } from "playwright";

let browser: Browser;
let page: Page;
setDefaultTimeout(60 * 1000);

Given("User navigates to the application", async function () {});

Given("User click on the login link", async function () {});

Given(
  "User enter the username as {string}",
  async function (username: string) {}
);

Given("User enter the password", async function () {});

When("User click on the login button", async function () {});

Then("Login should be success", async function () {});
