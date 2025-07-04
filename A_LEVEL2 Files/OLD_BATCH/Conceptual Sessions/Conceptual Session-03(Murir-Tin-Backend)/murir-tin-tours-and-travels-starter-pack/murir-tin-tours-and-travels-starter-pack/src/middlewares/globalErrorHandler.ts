/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextFunction, Request, Response } from 'express'
import mongoose from 'mongoose'
import { TErrorResponse } from '../types/TErrorResponse'
import { handleValidationError } from '../helpers/errorHelpers/handleValidationError'

const globalErrorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  // const message =
  //   `${err.message} error from global error handler` || 'Something went wrong'
  // const statusCode = err.statusCode || 500
  // const status = err.status || 'error'
  // console.log(err)

  // if (err.name && err.name === 'ValidationError') {
  //   console.log('Ami Validation Error')
  // }

  let errorResponse: TErrorResponse = {
    statusCode: err.statusCode,
    message: err.message,
    status: err.status,
    issues: err.issues || [],
  }
  if (err instanceof mongoose.Error.ValidationError) {
    errorResponse = handleValidationError(err)

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
  } else if (err.code && err.code === 11000) {
    console.log('Ami Duplicate  Error')
    errorResponse.message = 'Duplicate Error'
    errorResponse.statusCode = 400
    errorResponse.status = 'error'
  }
  res.status(errorResponse.statusCode).json({
    message: errorResponse.message,
    status: errorResponse.status,
    err: err,
    issues: errorResponse.issues,
  })
  next()
}
export default globalErrorHandler
//Error Pattern
//statusCode
//status
//message
//issues
