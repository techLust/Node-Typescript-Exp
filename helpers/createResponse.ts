import { JsonRes, User } from "../interfaces/interface";

export const createJsonRes = (message: string, status: string = "failure", data: User | User[] | null = null) => {
    const jsonRes: JsonRes = { message: "", status, data }
    if (status !== "failure") {
        jsonRes.message = message;
        jsonRes.status = status;
        jsonRes.data = data;
        return jsonRes;
    }
    jsonRes.message = message
    return jsonRes;
}