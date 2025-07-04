"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleValidationError = void 0;
const handleValidationError = (err) => {
    // cons', err)ole.log('31
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
        message: 'Validation Error',
        status: 'fail',
        statusCode: 400,
        issues,
    };
};
exports.handleValidationError = handleValidationError;
