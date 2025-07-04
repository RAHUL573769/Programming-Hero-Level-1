/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import mongoose from 'mongoose'
import { TErrorIssues, TErrorResponse } from '../../types/TErrorResponse'

export const handleValidationError = (
  err: mongoose.Error.ValidationError,
): TErrorResponse => {
  // cons', err)ole.log('31

  // console.log('Ami Validation Error')

  //   errorResponse.message = err.message
  //   errorResponse.statusCode = 400
  //   errorResponse.status = 'error'

  const errorValues = Object.values(err.errors)
  const issues: TErrorIssues[] = []
  // console.log('Error Values', errorValues)

  errorValues.map(
    (errorObj: mongoose.Error.ValidatorError | mongoose.Error.CastError) => {
      // console.log('40 ,Error', errorObj)

      issues.push({
        path: errorObj.path,
        message: errorObj.message,
        kind: errorObj.kind,
      })
    },
  )

  return {
    message: 'Validation Error',
    status: 'fail',
    statusCode: 400,
    issues,
  }
}
