import * as fs from "fs";
import { exec } from 'child_process';

export function readJsonFile(filepath: string) {
  const jsonData = fs.readFileSync(filepath, "utf-8");
  return JSON.parse(jsonData);
}


export function executeBatch(batchFilePath: string): void {
  exec(batchFilePath, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error executing batch file: ${error.message}`);
      return;
    }
    console.log(`Batch file output: ${stdout}`);
  });
}


