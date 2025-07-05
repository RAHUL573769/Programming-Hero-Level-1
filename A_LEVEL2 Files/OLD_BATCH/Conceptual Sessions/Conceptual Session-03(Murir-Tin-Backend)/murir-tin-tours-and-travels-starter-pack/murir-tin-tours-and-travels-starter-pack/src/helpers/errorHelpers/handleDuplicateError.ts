/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */

import mongoose from 'mongoose'
import { TErrorIssues, TErrorResponse } from '../../types/TErrorResponse'

export const handleDuplicateError = (
  err: mongoose.Error.ValidationError,
): TErrorResponse => {
  // console.log('Ami Validation Error')

  //   errorResponse.message = err.message
  //   errorResponse.statusCode = 400
  //   errorResponse.status = 'error'

  const errorValues = Object.values(err.errors)
  const issues: TErrorIssues[] = []
  // console.log('Error Values', errorValues)

  errorValues.map((errorObj) => {
    // console.log('40 ,Error', errorObj)

    issues.push({
      path: errorObj.path,
      message: errorObj.message,
      kind: errorObj.kind,
    })
  })

  return {
    message: 'Duplication  Error',
    status: 'fail',
    statusCode: 409,
    issues,
  }
}
