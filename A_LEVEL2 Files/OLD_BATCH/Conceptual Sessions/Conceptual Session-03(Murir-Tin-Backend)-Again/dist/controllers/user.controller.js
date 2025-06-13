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
exports.userController = void 0;
const user_servicrs_1 = require("../services/user.servicrs");
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userData = req.body;
        console.log("userdata", userData);
        const data = yield user_servicrs_1.UserServices.createUser(userData);
        res.status(200).json({
            message: "User Creation Done",
            status: "Success",
            data: data,
        });
    }
    catch (error) {
        res.status(500).json({
            message: "User Creation Failed",
            status: "Failed",
            data: error,
        });
    }
});
exports.userController = { createUser };
