"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
class GenericError extends Error {
    constructor(message, Code) {
        super(message);
        this.statusCode = Code;
        Error.captureStackTrace(this, this.constructor);
    }
}
exports.default = GenericError;
