import { Given, When, Then } from "@cucumber/cucumber";
import APIService from "../../helper/api-helper";
import { endpoints } from "../../config/endpoints";
import API from "../../helper/api";
import { readJsonFile } from "../../helper/read-write";
import {PostgresQuery} from "../../db/db-query";
import {pgConfig} from "../../db/db-config"

let apiService: APIService;

Given("User call the token generation api", async function () {

  apiService = new APIService();
  let resp = await apiService.getRequest(endpoints.getProvinceURL, await apiService.getToken());
  console.log(resp);
});

Given("USer fetch the token from the response", async function () {
  console.log("*****Advanced way using api.ts class*********");
  // let api = new API(this.page);
  // let tt = await api.gToken();
  // console.log(tt);
});

Given("user call the get api to fetch the user list", async function () {
  apiService = new APIService();
  let data = readJsonFile("test-data/post-req.json");
  let resp = await apiService.postRequest(endpoints.getProvinceURL, await apiService.getToken(), data);
  console.log(resp);
});
