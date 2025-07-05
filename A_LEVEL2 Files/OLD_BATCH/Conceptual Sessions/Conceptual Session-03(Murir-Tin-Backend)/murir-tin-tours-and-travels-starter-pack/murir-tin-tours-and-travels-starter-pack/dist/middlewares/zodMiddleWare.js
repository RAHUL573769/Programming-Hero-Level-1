"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTourZodSchema = void 0;
const zod_1 = __importDefault(require("zod"));
exports.createTourZodSchema = zod_1.default.object({
    body: zod_1.default.string(),
    durationHours: zod_1.default.number().int().positive().min(1),
    ratingsAverage: zod_1.default.number().int().positive().min(1).max(5),
    price: zod_1.default.number(),
});
