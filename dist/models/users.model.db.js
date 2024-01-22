"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userModel = void 0;
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    name: {
        type: String,
    },
    age: {
        type: Number,
    },
    email: {
        type: String,
    },
    isStudent: {
        type: Boolean
    }
}, {
    timestamps: true,
});
exports.userModel = (0, mongoose_1.model)('Users', userSchema);
