/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextFunction, Request, Response } from 'express'

const globalErrorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const message =
    `${err.message} error from global error handler` || 'Something went wrong'
  const statusCode = err.statusCode || 500
  const status = err.status || 'error'

  res.status(statusCode).json({
    message: message,
    status: status,
  })
  next()
}
export default globalErrorHandler
