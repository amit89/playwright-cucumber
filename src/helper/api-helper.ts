import {
  APIRequestContext,
  APIResponse,
  request,
  Page,
} from "@playwright/test";
import BasePage from "../pages/base-page";
import { createTokenHeader } from "../config/constants";
import { endpoints } from "../config/endpoints";

export type Serializable = any;
let apiContext: APIRequestContext;
let response: APIResponse;
const createTokenAuth = createTokenHeader();

export default class APIService extends BasePage {
  constructor(public page: Page) {
    super(page);
  }

  async postRequest(
    endPoint: string,
    token: Record<string, string>,
    data?: Record<string, any>
  ) {
    console.log("*******CALLING POST API***********");
    apiContext = await request.newContext();

    response = await apiContext.post(endPoint, {
      data: data,
      headers: token,
    });
    return await response.json();
  }

  async getRequest(
    endPoint: string,
    token: Record<string, string>
  ): Promise<Serializable> {
    console.log("*******CALLING GET API***********");

    //apiContext = await request.newContext();
    response = await apiContext.get(endPoint, {
      headers: token,
    });
    return await response.json();
  }

  async getToken() {
    let jsonObj = await this.postRequest(
      endpoints.createTokenURL,
      createTokenAuth
    );
    let access_token = await jsonObj.access_token;
    const token = {
      Authorization: `Bearer ${access_token}`,
    };
    return token;
  }
}
