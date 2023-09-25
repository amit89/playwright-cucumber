import { ClientConfig } from 'pg';
import * as dotenv from 'dotenv';

dotenv.config({
  override: true,
  path: `src/helper/env/.env.db`
});

 export const pgConfig: ClientConfig = {
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD,
    port: parseInt(process.env.DB_PORT || '5432', 10)
  };


