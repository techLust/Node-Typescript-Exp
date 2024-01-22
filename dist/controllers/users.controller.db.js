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
exports.deleteUser = exports.updateUser = exports.getUser = exports.createUser = void 0;
const users_model_db_1 = require("../models/users.model.db");
const createResponse_1 = require("../helpers/createResponse");
const logger_1 = require("../utility/logger");
let logger = (0, logger_1.customLogger)();
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    logger.info('creating user...');
    try {
        const { name, age, email, isStudent } = req.body;
        const userDetails = yield users_model_db_1.userModel.create({ name, age, email, isStudent });
        logger.info('user created successfull');
        return res.status(201).json((0, createResponse_1.createJsonRes)('success', 'user created successfull', userDetails));
    }
    catch (e) {
        logger.error(e.message);
        return res.status(500).json((0, createResponse_1.createJsonRes)('Failed to create user'));
    }
});
exports.createUser = createUser;
const getUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    logger.info('fetching user...');
    try {
        const userDetails = yield users_model_db_1.userModel.find();
        logger.info('user fetched successfully');
        return res.status(200).json((0, createResponse_1.createJsonRes)('users fetched successfull', 'success', userDetails));
    }
    catch (e) {
        logger.error(e.message);
        return res.status(500).json((0, createResponse_1.createJsonRes)('Failed to get users'));
    }
});
exports.getUser = getUser;
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    logger.info('updating user...');
    try {
        const { id } = req.params;
        const body = req.body;
        let userDetails = yield users_model_db_1.userModel.findById(id);
        logger.info('checking if user exists...');
        if (!userDetails) {
            logger.error('user already exists');
            return res.status(404).json((0, createResponse_1.createJsonRes)('user not found'));
        }
        logger.info('validating inputs...');
        if (userDetails !== null) {
            for (let key in body) {
                if (!(key in userDetails)) {
                    logger.error('field does not exist in user');
                    return res.status(400).json((0, createResponse_1.createJsonRes)('field does not exists'));
                }
            }
        }
        const updatedUserData = yield users_model_db_1.userModel.findByIdAndUpdate(id, body, { new: true });
        logger.info('user updated :)');
        return res.status(202).json((0, createResponse_1.createJsonRes)('user updated successfull', 'accepted', updatedUserData));
    }
    catch (e) {
        logger.error(e.message);
        return res.status(500).json((0, createResponse_1.createJsonRes)('Failed to update users details'));
    }
});
exports.updateUser = updateUser;
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const userDetails = yield users_model_db_1.userModel.findByIdAndDelete(id);
        logger.info('user deleted successfullI');
        return res.status(202).json((0, createResponse_1.createJsonRes)('user delete successfull', 'accepted', userDetails));
    }
    catch (e) {
        logger.error(e.message);
        return res.status(500).json((0, createResponse_1.createJsonRes)('failed to delete user'));
    }
});
exports.deleteUser = deleteUser;
