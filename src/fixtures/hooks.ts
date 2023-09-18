import { BeforeAll, AfterAll, setDefaultTimeout } from "@cucumber/cucumber";
import { Browser, Page, chromium } from "@playwright/test";
import { fixture } from "../fixtures/base-fixture";

let browser: Browser;
let page: Page;
setDefaultTimeout(60 * 1000);

BeforeAll(async function () {
  browser = await chromium.launch({ headless: false });
  page = await browser.newPage();
  fixture.page = page;
});

AfterAll(async function () {
  await page.close();
  await browser.close();
});
