import { Query } from 'pg';
import { DatabaseHandler } from './db-handler';

export class PostgresQuery {
  private db: DatabaseHandler;

  constructor(private dbConfig: any) {
    this.db = new DatabaseHandler(dbConfig);
  }

  async fetchDataFromTable(dbQuery:string): Promise<void> {
    try {
      await this.db.connect();
      console.log("*******DB CONNECTION HAS BEEN MADE SUCCESSFULLY*******");

      const query = dbQuery;
      const result = await this.db.executeQuery(query);
      console.log("*******DB QUERY HAS BEEN EXECUTED SUCCESSFULLY*******");

      if (result.rows.length > 0) {
        console.log('Data from the table:', result.rows);
      } else {
        console.log('Target table is empty :-(');
      }
    } catch (error) {
      console.error('Error Encountered while connecting the database : ', error);
    } finally {
      await this.db.disconnect();
    }
  }
}
