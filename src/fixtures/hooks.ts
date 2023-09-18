import { BeforeAll, AfterAll, setDefaultTimeout } from "@cucumber/cucumber";
import { Browser, Page, chromium } from "@playwright/test";
import { pageFixture } from "./page-fixture";

let browser: Browser;
let page: Page;
setDefaultTimeout(60 * 1000);

BeforeAll(async function () {
  browser = await chromium.launch({ headless: false });
  page = await browser.newPage();
  pageFixture.page = page;
});

AfterAll(async function () {
  await page.close();
  await browser.close();
});
