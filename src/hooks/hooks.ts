import { BeforeAll, AfterAll, Before, After, Status } from "@cucumber/cucumber";
import { Browser, BrowserContext } from "@playwright/test";
import { fixture } from "./page-fixture";
import { invokeBrowser } from "../helper/browsers/browser-manager";
import { getEnv } from "../helper/env/env";
import { createLogger } from "winston";
import { options } from "../helper/util/logger";
//const fs = require("fs-extra");
//import fs from "fs-extra";


let browser: Browser;
let context: BrowserContext;

BeforeAll(async function () {
    getEnv();
    browser = await invokeBrowser();
});


Before(async function ({ pickle }) {
    const scenarioName = pickle.name + pickle.id
    context = await browser.newContext({
    });
    const page = await context.newPage();
    fixture.page = page;
    fixture.logger = createLogger(options(scenarioName));
});


After(async function ({ pickle, result }) {
    if(result){

    if (result.status == Status.FAILED) {
       await fixture.page.screenshot({ path: `./test-results/screenshots/${pickle.name}.png`, type: "png" })
    }
    await fixture.page.close();
    await context.close()
}

});

AfterAll(async function () {
    await browser.close();
});

export {browser, context}
