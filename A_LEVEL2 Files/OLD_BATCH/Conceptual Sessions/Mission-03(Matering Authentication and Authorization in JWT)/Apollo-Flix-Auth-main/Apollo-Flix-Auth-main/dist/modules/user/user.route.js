"use strict";
//  /create-admin, superAdmin,admin post
// /:userid- admin, superadmin put
// /:userid-  get
// /me - user own data. put
//
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRoutes = void 0;
const express_1 = __importDefault(require("express"));
const auth_1 = require("../../middlewares/auth");
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const user_constants_1 = require("./user.constants");
const user_controller_1 = require("./user.controller");
const user_validation_1 = require("./user.validation");
const router = express_1.default.Router();
router.post("/create-admin", (0, validateRequest_1.default)(user_validation_1.UserValidations.createAdminValidations), (0, auth_1.auth)(user_constants_1.USER_Role.ADMIN, user_constants_1.USER_Role.SUPER_ADMIN), user_controller_1.userControllers.createAdmin);
//update
router.put("/:userId", (0, auth_1.auth)(user_constants_1.USER_Role.ADMIN, user_constants_1.USER_Role.SUPER_ADMIN), (0, validateRequest_1.default)(user_validation_1.UserValidations.updateUserValidations), user_controller_1.userControllers.updateUser);
// router.put(
//   "/me",
//   auth(USER_Role.ADMIN, USER_Role.SUPER_ADMIN, USER_Role.USER),
//   validateRequest(UserValidations.updateUserValidations),
//   userControllers.updateUser
// );
exports.UserRoutes = router;
//login /api/auth/login
//register /api/users/create-student : /api/auth/register
//forgot password /api/auth/forgot-password
//refresh token /api/auth/refresh-token
