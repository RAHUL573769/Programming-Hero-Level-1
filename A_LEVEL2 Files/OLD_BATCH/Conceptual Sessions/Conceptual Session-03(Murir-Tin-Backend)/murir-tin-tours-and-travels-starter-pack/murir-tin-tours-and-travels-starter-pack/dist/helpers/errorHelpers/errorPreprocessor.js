"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorPreprocessor = void 0;
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
const mongoose_1 = __importDefault(require("mongoose"));
const handleValidationError_1 = require("./handleValidationError");
const handleDuplicateError_1 = require("./handleDuplicateError");
const handleCastError_1 = require("./handleCastError");
const GenericError_1 = __importDefault(require("../../classes/ErrorClasses/GenericError"));
const handleGenericError_1 = require("./handleGenericError");
const errorPreprocessor = (err) => {
    if (err instanceof mongoose_1.default.Error.ValidationError) {
        return (0, handleValidationError_1.handleValidationError)(err);
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
        return (0, handleDuplicateError_1.handleDuplicateError)(err);
        // console.log('Ami Duplicate  Error')
        // errorResponse.message = 'Duplicate Error'
        // errorResponse.statusCode = 400
        // errorResponse.status = 'error'
        // errorResponse.issues = [
        //   { path: '', message: 'Value is duplicated', kind: '' },
        // ]
    }
    else if (err && err instanceof mongoose_1.default.Error.CastError) {
        return (0, handleCastError_1.handleCastError)(err);
        // console.log('Ami CastError')
        // errorResponse.message = 'Invalid ID'
        // errorResponse.statusCode = 400
        // errorResponse.status = 'error'
        // errorResponse.issues = [
        //   { path: err.path, kind: err.kind, message: err.message },
        // ]
        // const errorValues = Object.values(err)
        // console.log('69', errorValues)
        // errorValues.map(
        //   (errorObj: mongoose.Error.ValidatorError | mongoose.Error.CastError) => {
        //     errorResponse.issues.push({
        //       path: errorObj.path,
        //       message: errorObj.message,
        //       kind: errorObj.kind,
        //     })
        //   },
        // )
    }
    else if (err instanceof GenericError_1.default) {
        console.log('I amHere 1');
        return (0, handleGenericError_1.handleGenericError)(err);
    }
    else {
        console.log('I amHere');
        return {
            message: 'Unknown Error Found',
            statusCode: 500,
            status: 'error',
            issues: [
                {
                    message: err.message,
                    kind: '',
                    path: '',
                },
            ],
        };
    }
};
exports.errorPreprocessor = errorPreprocessor;
