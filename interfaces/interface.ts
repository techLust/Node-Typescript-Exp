import { Request } from "express";
import { Document } from "mongoose";

export interface User extends Document {
    id: string | number;
    name: string;
    age: number;
    email: string;
    isStudent: boolean;
}

export interface JsonRes {
    message: string;
    status: string;
    data: User | User[] | null;
}

export interface CustomRequest extends Request {
    locals: any
}

// export class User {
//   constructor(id: number, name: string, age: number, isStudent: boolean) {}
// }

