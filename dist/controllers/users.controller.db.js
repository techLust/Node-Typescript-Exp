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
exports.createUser = void 0;
const users_model_db_1 = require("../models/users.model.db");
const createResponse_1 = require("../helpers/createResponse");
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, age, isStudent } = req.body;
        const userDetails = yield users_model_db_1.userModel.create({ name, age, isStudent });
        return res.status(201).json((0, createResponse_1.createJsonRes)('user created successfull', 'success', userDetails));
    }
    catch (e) {
        console.log(e);
        return res.status(500).json((0, createResponse_1.createJsonRes)('Failed to create user'));
    }
});
exports.createUser = createUser;
