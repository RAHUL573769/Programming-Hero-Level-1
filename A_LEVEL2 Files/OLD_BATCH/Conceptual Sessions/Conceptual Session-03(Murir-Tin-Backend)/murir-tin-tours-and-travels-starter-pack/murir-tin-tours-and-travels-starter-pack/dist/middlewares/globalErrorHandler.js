"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const handleValidationError_1 = require("../helpers/errorHelpers/handleValidationError");
const globalErrorHandler = (err, req, res, next) => {
    // const message =
    //   `${err.message} error from global error handler` || 'Something went wrong'
    // const statusCode = err.statusCode || 500
    // const status = err.status || 'error'
    // console.log(err)
    // if (err.name && err.name === 'ValidationError') {
    //   console.log('Ami Validation Error')
    // }
    let errorResponse = {
        statusCode: err.statusCode,
        message: err.message,
        status: err.status,
        issues: err.issues || [],
    };
    if (err instanceof mongoose_1.default.Error.ValidationError) {
        errorResponse = (0, handleValidationError_1.handleValidationError)(err);
        // console.log('Ami Validation Error')
        // errorResponse.message = err.message
        // errorResponse.statusCode = 400
        // errorResponse.status = 'error'
        // const errorValues = Object.values(err.errors)
        // // console.log('Error Values', errorValues)
        // errorValues.map(
        //   (errorObj: mongoose.Error.ValidatorError | mongoose.Error.CastError) => {
        //     // console.log('40 ,Error', errorObj)
        //     errorResponse.issues.push({
        //       path: errorObj.path,
        //       message: errorObj.message,
        //       kind: errorObj.kind,
        //     })
        //   },
        // )
    }
    else if (err.code && err.code === 11000) {
        console.log('Ami Duplicate  Error');
        errorResponse.message = 'Duplicate Error';
        errorResponse.statusCode = 400;
        errorResponse.status = 'error';
    }
    res.status(errorResponse.statusCode).json({
        message: errorResponse.message,
        status: errorResponse.status,
        err: err,
        issues: errorResponse.issues,
    });
    next();
};
exports.default = globalErrorHandler;
//Error Pattern
//statusCode
//status
//message
//issues
