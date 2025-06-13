"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    name: {
        type: String,
    },
    email: { type: String },
    age: {
        type: Number,
    },
    photo: { type: String },
    userStatus: { type: String, enum: ["active", "inactive"] },
    role: { type: String, enum: ["user", "admin"] },
});
const User = (0, mongoose_1.model)("User", userSchema);
exports.default = User;
// role: "user" | "admin";
// userStatus: "active" | "inactive";
