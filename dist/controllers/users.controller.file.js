"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.getUser = exports.updateUser = exports.createUser = void 0;
const manageFile_1 = require("../helpers/manageFile");
const createUser = (data) => {
    (0, manageFile_1.createJsonFile)();
    const userData = manageFile_1.file.read();
    userData.push(data);
    manageFile_1.file.write(userData);
};
exports.createUser = createUser;
const updateUser = (data, id) => {
    if (!data)
        return;
    const userDetails = manageFile_1.file.read();
    let updateUser;
    const updatedData = userDetails.map((el) => {
        if (el['id'] == id) {
            updateUser = Object.assign(Object.assign({}, el), data);
            return Object.assign(Object.assign({}, el), data);
        }
        return el;
    });
    manageFile_1.file.write(updatedData);
    return updateUser;
};
exports.updateUser = updateUser;
const getUser = () => {
    const userDetails = manageFile_1.file.read();
    console.log(userDetails);
    return userDetails;
};
exports.getUser = getUser;
const deleteUser = (id) => {
    const userDetails = manageFile_1.file.read();
    const userData = userDetails.filter((el) => {
        return el['id'] !== id;
    });
    manageFile_1.file.write(userData);
    return true;
};
exports.deleteUser = deleteUser;
