
import PlaywrightWrapper from "../helper/wrapper/playwright-wrapper";
import { Page , Browser, BrowserContext} from "@playwright/test";
//let browser: Browser;


export default class LoginPage  {

  private newPage: Page | null = null;
  private base: PlaywrightWrapper;


  constructor(private page: Page){
    this.base = new PlaywrightWrapper(page);
  }

  private Elements = {
    bussinessLink: "a[href='/business/contact/']",
    firstName: "#navbar_sign_in_button"
}

async openHomePage() {
  const baseUrl = process.env.BASEURL;
  if (!baseUrl) {
    throw new Error("BASEURL environment variable is not defined.");
  }
  await this.base.goto(baseUrl);
}

async opentheLink(context: BrowserContext){
  this.newPage = await this.base.openNewtab(context, this.Elements.bussinessLink)
  console.log(await this.newPage.title());
  return this.newPage
 }

 async clicOnLoginBUtton(){
  if (this.newPage) {
    const title = await this.newPage.title();
    await this.newPage.locator(this.Elements.firstName).click();
    await this.newPage.locator("#id_login").fill("amit.bbn@gmail.com");
  } else {
    throw new Error("New page is null.");
  }
}

}
