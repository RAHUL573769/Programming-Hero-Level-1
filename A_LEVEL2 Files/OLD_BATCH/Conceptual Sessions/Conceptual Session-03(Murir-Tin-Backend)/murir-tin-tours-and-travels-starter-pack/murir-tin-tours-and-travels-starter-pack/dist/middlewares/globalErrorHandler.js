"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const globalErrorHandler = (err, req, res, next) => {
    const message = `${err.message} error from global error handler` || 'Something went wrong';
    const statusCode = err.statusCode || 500;
    const status = err.status || 'error';
    res.status(statusCode).json({
        message: message,
        status: status,
    });
    next();
};
exports.default = globalErrorHandler;
