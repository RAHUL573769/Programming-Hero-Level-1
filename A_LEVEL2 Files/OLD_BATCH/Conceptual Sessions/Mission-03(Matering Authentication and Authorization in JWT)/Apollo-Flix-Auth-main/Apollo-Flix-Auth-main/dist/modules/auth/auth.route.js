"use strict";
//  /create-admin, superAdmin,admin post
// /:authid- admin, superadmin put
// /:authid-  get
// /me - auth own data. put
//
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthRoutes = void 0;
const express_1 = __importDefault(require("express"));
const auth_controller_1 = require("./auth.controller");
const router = express_1.default.Router();
router.post("/register", auth_controller_1.authControllers.register);
router.post("/login", auth_controller_1.authControllers.login);
exports.AuthRoutes = router;
//login /api/auth/login
//register /api/auths/create-student : /api/auth/register
//forgot password /api/auth/forgot-password
//refresh token /api/auth/refresh-token
