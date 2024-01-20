"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createJsonRes = void 0;
const createJsonRes = (message, status = "failure", data = null) => {
    const jsonRes = { message: "", status, data };
    if (status !== "failure") {
        jsonRes.message = message;
        jsonRes.status = status;
        jsonRes.data = data;
        return jsonRes;
    }
    jsonRes.message = message;
    return jsonRes;
};
exports.createJsonRes = createJsonRes;
