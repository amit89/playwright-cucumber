import { Given, When, Then, setDefaultTimeout, BeforeAll } from "@cucumber/cucumber";
import { readExcel } from "../../helper/read-write";
import LoginPage from "../../pages/login-page";
import { fixture } from "../../hooks/page-fixture";
import {runLighthouseAudit} from "../../helper/light-house"

 
let loginPage: LoginPage;
setDefaultTimeout(60 * 1000 * 2)

Given('This is dummy test', async function () {
    runLighthouseAudit("https://playwright.dev/", "/Users/amitkumar/Documents/Documents/pw-proj/pw-ts-c/test-results/report.html");

            });

Then('User name should get printed', async function () {

         });
  
Given('a user with name {string}, age {string}, and country {string}', async function (string, string2, string3) {
    interface UserData {
        username: string;
        accountNumber: string;
        accountName: string;
      }
    
      // Assuming readExcelData returns an array of objects with unknown type
      const excelDataUnknown: any[] = readExcel("/Users/amitkumar/Documents/Documents/pw-proj/pw-ts-c/test-data/ILAP_AccountLogin.xlsx", 0);
    
      // Cast each element to UserData
      const excelData: UserData[] = excelDataUnknown.map((item: any) => item as UserData);
    
      for (const data of excelData) {
        console.log(`Name: ${data.username}, AccountNumber: ${data.accountNumber}, AccountName: ${data.accountName}`);
      }
});
