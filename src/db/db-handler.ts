import { Client, ClientConfig, QueryResult } from 'pg';

export class DatabaseHandler {
  private client: Client;

  constructor(private pgConfig: ClientConfig) {
    this.client = new Client(pgConfig);
  }

  async connect(): Promise<void> {
    await this.client.connect();
  }

  async disconnect(): Promise<void> {
    await this.client.end();
  }

  async executeQuery(query: string): Promise<QueryResult> {
    return await this.client.query(query);
  }
}
