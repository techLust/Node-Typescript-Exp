"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const users_controller_db_1 = require("../controllers/users.controller.db");
const checkExistingUser_1 = require("../middlewares/checkExistingUser");
const router = express_1.default.Router();
exports.router = router;
router.post('/', checkExistingUser_1.checkUserExist, users_controller_db_1.createUser);
router.get('/', users_controller_db_1.getUser);
router.put('/:id', users_controller_db_1.updateUser);
router.delete('/:id', users_controller_db_1.deleteUser);
