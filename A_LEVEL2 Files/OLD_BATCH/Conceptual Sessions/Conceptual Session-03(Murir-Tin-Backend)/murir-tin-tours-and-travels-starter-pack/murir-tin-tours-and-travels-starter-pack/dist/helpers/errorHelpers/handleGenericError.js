"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleGenericError = void 0;
const handleGenericError = (err) => {
    // cons', err)ole.log('31
    //   console.log('Error 123', err.path)
    // console.log('Ami Validation Error')
    //   errorResponse.message = err.message
    //   errorResponse.statusCode = 400
    //   errorResponse.status = 'error'
    const issues = [
        { path: '', message: err.message, kind: 'This is Generic Kind of Error' },
    ];
    // console.log('Error Values', errorValues)
    //   errorValues.map(
    //     (errorObj: mongoose.Error.ValidatorError | mongoose.Error.CastError) => {
    //       // console.log('40 ,Error', errorObj)
    //       issues.push({
    //         path: errorObj.path,
    //         message: errorObj.message,
    //         kind: errorObj.kind,
    //       })
    //     },
    //   )
    return {
        message: 'Generic Error Found',
        status: 'fail',
        statusCode: err.statusCode,
        issues,
    };
};
exports.handleGenericError = handleGenericError;
