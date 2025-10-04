"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserValidations = void 0;
const zod_1 = require("zod");
const user_constants_1 = require("./user.constants");
// const createAdminValidations = z.object({
//   body: z.object({
//     name: z.string(),
//     role: z.nativeEnum(USER_Role).default(USER_Role.ADMIN),
//     email: z.string().email(),
//     password: z.string(),
//     status: z.nativeEnum(USER_STATUS).default(USER_STATUS.ACTIVE),
//   }),
// });
const updateUserValidations = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string().optional(),
        role: zod_1.z.nativeEnum(user_constants_1.USER_Role).optional(),
        status: zod_1.z.nativeEnum(user_constants_1.USER_STATUS).optional(),
    }),
});
const createAdminValidations = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string(),
        role: zod_1.z.nativeEnum(user_constants_1.USER_Role).default(user_constants_1.USER_Role.ADMIN),
        email: zod_1.z.string().email(),
        password: zod_1.z.string(),
        status: zod_1.z.nativeEnum(user_constants_1.USER_STATUS).default(user_constants_1.USER_STATUS.ACTIVE),
    }),
});
exports.UserValidations = {
    createAdminValidations,
    updateUserValidations,
};
