"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkUserExist = void 0;
const users_model_db_1 = require("../models/users.model.db");
const createResponse_1 = require("../helpers/createResponse");
const checkUserExist = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email } = req.body;
        const registeredUser = yield users_model_db_1.userModel.findOne({ email: email });
        if (registeredUser)
            return res.status(200).json((0, createResponse_1.createJsonRes)('user already exists'));
        next();
    }
    catch (e) {
        console.log(e);
        return res.status(500).json((0, createResponse_1.createJsonRes)(e.message));
    }
});
exports.checkUserExist = checkUserExist;
