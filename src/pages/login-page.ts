
import PlaywrightWrapper from "../helper/wrapper/playwright-wrapper";
import { Page , Browser, BrowserContext} from "@playwright/test";
//let browser: Browser;

export default class LoginPage  {

  private base: PlaywrightWrapper;


  constructor(private page: Page){
    this.base = new PlaywrightWrapper(page);
  }

  private Elements = {
    bussinessLink: "a[href='/business/contact/']"
}

async openHomePage() {
  const baseUrl = process.env.BASEURL;
  if (!baseUrl) {
    throw new Error("BASEURL environment variable is not defined.");
  }
  await this.base.goto(baseUrl);
}

async opentheLink(context: BrowserContext){
  const newPage = await this.base.openNewtab(context, this.Elements.bussinessLink)
  console.log(await newPage.title());
 }
  
}
