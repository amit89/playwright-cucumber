import {APIRequestContext,request} from "@playwright/test";
import { createTokenHeader, defaultHeader } from "../config/constants";
import { endpoints } from "../config/endpoints";

export type Serializable = any;
let apiContext: APIRequestContext;
const createTokenAuth = createTokenHeader();
const header = defaultHeader();

export default class APIService  {

  async postRequest(endPoint: string, token: Record<string, string>, data?: Record<string, any>):Promise<Serializable> {

    console.log("*******CALLING POST API***********");
    apiContext = await request.newContext();
    const response = await apiContext.post(endPoint, {
      data: data,
      headers: token,
      ignoreHTTPSErrors: false,
    });
    console.log("Status code of the called api is :" + response.status());
    return await response.json();
  }

  async getRequest(endPoint: string, token: Record<string, string>): Promise<Serializable> {

    console.log("*******CALLING GET API***********");
    const response = await apiContext.get(endPoint, {
      headers: token,
      ignoreHTTPSErrors: false,
    });
    console.log("Status code of the called api is :" + response.status());
    return await response.json();
  }

  async getToken() {
    let jsonObj = await this.postRequest(endpoints.createTokenURL, createTokenAuth);
    let access_token = await jsonObj.access_token;
    const bearerToken = {
      Authorization: `Bearer ${access_token}`,
    };
    console.log("Token genenrated with value" + bearerToken)
    return bearerToken;
  }

  async postRequestWithNoAuth(endPoint: string, data?: Record<string, any>): Promise<Serializable>{

    console.log("*******CALLING POST API WITH NO AUTH***********");
    const response = await apiContext.post(endPoint,{
      data: data,
      headers: header,
      ignoreHTTPSErrors: false,
    });
    console.log("Status code of the called api is :" + response.status());
    return await response.json();
  }

  async getRequestNoAuth(endPoint: string){

    console.log("*******CALLING GET API WITH NO AUTH***********");
    const response = await apiContext.get(endPoint,{
      headers: header,
      ignoreHTTPSErrors: false,
    });
    console.log("Status code of the called api is :" + response.status());
    return await response.json();
  }
}
