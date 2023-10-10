import { Given, When, Then, setDefaultTimeout, BeforeAll } from "@cucumber/cucumber";
import LoginPage from "../../pages/login-page";
import { expect } from "@playwright/test";
import { fixture } from "../../hooks/page-fixture";
import {context} from "../../hooks/hooks"
import { readExcel } from "../../helper/read-write";
import { read } from "xlsx";


let loginPage: LoginPage;
setDefaultTimeout(60 * 1000 * 2)

  Given('User provide the username and password', async function () {

    loginPage = new LoginPage(fixture.page);
    await loginPage.openHomePage();
    fixture.logger.info("Navigated to the application");
    await loginPage.opentheLink(context);

  });

  Given('User click on login button', async function () {
    await loginPage.clicOnLoginBUtton();

  });

  Then('User should able to login successfully', async function () {
    const data = readExcel("/Users/amitkumar/Documents/Documents/pw-proj/pw-ts-c/test-data/ILAP_AccountLogin.xlsx", 0);
    console.log(data)
  });