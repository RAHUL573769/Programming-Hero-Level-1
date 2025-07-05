/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import mongoose from 'mongoose'
import { handleValidationError } from './handleValidationError'
import { handleDuplicateError } from './handleDuplicateError'
import { handleCastError } from './handleCastError'
import GenericError from '../../classes/ErrorClasses/GenericError'
import { handleGenericError } from './handleGenericError'
import { TErrorResponse } from '../../types/TErrorResponse'

export const errorPreprocessor = (err: any): TErrorResponse => {
  if (err instanceof mongoose.Error.ValidationError) {
    return handleValidationError(err)

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
    return handleDuplicateError(err)
    // console.log('Ami Duplicate  Error')
    // errorResponse.message = 'Duplicate Error'
    // errorResponse.statusCode = 400
    // errorResponse.status = 'error'
    // errorResponse.issues = [
    //   { path: '', message: 'Value is duplicated', kind: '' },
    // ]
  } else if (err && err instanceof mongoose.Error.CastError) {
    return handleCastError(err)
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
  } else if (err instanceof GenericError) {
    console.log('I amHere 1')
    return handleGenericError(err)
  } else {
    console.log('I amHere')
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
    }
  }
}
