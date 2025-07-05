/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import mongoose from 'mongoose'
import { TErrorIssues, TErrorResponse } from '../../types/TErrorResponse'

export const handleCastError = (
  err: mongoose.Error.CastError,
): TErrorResponse => {
  // cons', err)ole.log('31
  //   console.log('Error 123', err.path)
  // console.log('Ami Validation Error')

  //   errorResponse.message = err.message
  //   errorResponse.statusCode = 400
  //   errorResponse.status = 'error'

  const issues: TErrorIssues[] = [
    { path: err.path, message: err.message, kind: err.kind },
  ]
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
    message: 'Cast Error Found',
    status: 'fail',
    statusCode: 400,
    issues,
  }
}
