import {
  APIRequestContext,
  APIResponse,
  request,
  Page,
} from "@playwright/test";
import BasePage from "../pages/base-page";
import { createTokenHeader, defaultHeader } from "../config/constants";

export type Serializable = any;
let apiContext: APIRequestContext;
let response: APIResponse;
const token = createTokenHeader();
const header = defaultHeader();
const createTokenURL =
  ""
interface RequestOptions {
  data?: Record<string, any>;
  headers?: Record<string, string>;
}

export default class API extends BasePage {
  constructor(public page: Page) {
    super(page);
  }

  async pRequest(endPoint: string, options?: RequestOptions) {
    apiContext = await request.newContext();

    const requestConfig: any = {
      data: options ? options.data : {},
      headers: options ? options.headers : token,
    };

    response = await apiContext.post(endPoint, requestConfig);
    return await response.json();
  }

  async gRequest(endPoint: string, options?: RequestOptions) {
    apiContext = await request.newContext();

    const requestConfig: any = {
      headers: options ? options.headers : header,
    };

    response = await apiContext.post(endPoint, requestConfig);
    return await response.json();
  }

  async gToken() {
    let r = await this.pRequest(createTokenURL);
    let t = await r.access_token;
    const tokenHeader = {
      Authorization: `Bearer ${t}`,
    };
    return tokenHeader;
  }
}
