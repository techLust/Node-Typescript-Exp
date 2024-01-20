import * as fs from "fs";
import { User } from "../models/users";

const createJsonFile = (fileName: string, data: User): boolean => {
  if (fs.existsSync("./userDB.json")) {
    const userData:string = fs.readFileSync(fileName, 'utf8')
    const userObject:User[] = JSON.parse(userData)
    userObject.push(data)
    fs.writeFileSync(fileName, JSON.stringify(userObject, null, 4))
    return true;
  }
  fs.writeFileSync(fileName, JSON.stringify([data]));
  return true;
};

export const createUser = (data: User) => {
  createJsonFile("./userDB.json", data);
};


