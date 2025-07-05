import GenericError from '../../classes/ErrorClasses/GenericError'
import { TErrorIssues, TErrorResponse } from '../../types/TErrorResponse'

export const handleGenericError = (err: GenericError): TErrorResponse => {
  // cons', err)ole.log('31
  //   console.log('Error 123', err.path)
  // console.log('Ami Validation Error')

  //   errorResponse.message = err.message
  //   errorResponse.statusCode = 400
  //   errorResponse.status = 'error'

  const issues: TErrorIssues[] = [
    { path: '', message: err.message, kind: 'This is Generic Kind of Error' },
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
    message: 'Generic Error Found',
    status: 'fail',
    statusCode: err.statusCode,
    issues,
  }
}
