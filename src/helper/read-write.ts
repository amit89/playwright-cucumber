import * as fs from "fs";

export function readJsonFile(filepath: string) {
  const jsonData = fs.readFileSync(filepath, "utf-8");
  return JSON.parse(jsonData);
}
