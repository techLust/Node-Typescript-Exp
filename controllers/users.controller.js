"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var createJsonFile = function (fileName, data) {
    if (fs.existsSync("./userDB.json")) {
        return true;
    }
    fs.writeFileSync(fileName, JSON.stringify(data));
    return true;
};
var createUser = function (data) {
    createJsonFile("./userDB.json", data);
};
createUser({ id: 1, name: "Sajjad", age: 24, isStudent: true });
