"use strict";
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleDuplicateError = void 0;
const handleDuplicateError = (err) => {
    // console.log('Ami Validation Error')
    //   errorResponse.message = err.message
    //   errorResponse.statusCode = 400
    //   errorResponse.status = 'error'
    const errorValues = Object.values(err.errors);
    const issues = [];
    // console.log('Error Values', errorValues)
    errorValues.map((errorObj) => {
        // console.log('40 ,Error', errorObj)
        issues.push({
            path: errorObj.path,
            message: errorObj.message,
            kind: errorObj.kind,
        });
    });
    return {
        message: 'Duplication  Error',
        status: 'fail',
        statusCode: 409,
        issues,
    };
};
exports.handleDuplicateError = handleDuplicateError;
