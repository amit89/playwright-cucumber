import {PostgresQuery} from "../../db/db-query";
import {pgConfig} from "../../db/db-config";
import { Given } from "@cucumber/cucumber";


Given('User make db query call to fetch the reord', async function () {
    const pg = new PostgresQuery(pgConfig);
    let data = await pg.fetchDataFromTable("select * from users");
  });