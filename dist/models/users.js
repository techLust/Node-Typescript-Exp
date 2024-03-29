"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
// export class User {
//   constructor(id: number, name: string, age: number, isStudent: boolean) {}
// }
const userSchema = new mongoose_1.Schema({
    name: {
        type: String,
    },
    age: {
        type: Number,
    },
    isStudent: {
        type: Boolean
    }
});
