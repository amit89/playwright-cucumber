import * as fs from "fs";
import { exec } from 'child_process';
import * as xlsx from 'xlsx';

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

export function readExcel(filepath: string, sheetType: number) {

  const workBook = xlsx.readFile(filepath);
  const sheetName = workBook.SheetNames[sheetType];
  const sheet = workBook.Sheets[sheetName];
  const jsonData = xlsx.utils.sheet_to_json(sheet);
  return jsonData
}



