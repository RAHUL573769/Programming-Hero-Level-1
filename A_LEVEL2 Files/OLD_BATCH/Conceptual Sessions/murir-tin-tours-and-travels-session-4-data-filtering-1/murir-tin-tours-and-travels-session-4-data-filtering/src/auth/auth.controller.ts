/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction, Request, Response } from 'express'
import { AuthServices } from './auth.service'
import sendSuccessResponse from '../utils/sendResponse'
import catchAsyncFunction from '../utils/catchAsync'

const login = async (req: Request, res: Response, next: NextFunction) => {
  console.log(req.body, 'Req-body')
  const result = await AuthServices.loginUser(req.body)
  sendSuccessResponse(res, {
    data: result,
    message: 'User Login Done',
    statusCode: 200,
  })
}

const register = catchAsyncFunction(async (req: Request, res: Response) => {
  const result = await AuthServices.registerUser(req.body)
  sendSuccessResponse(res, {
    data: result,
    message: 'User Register Done',
    statusCode: 200,
  })
})
export const AuthController = { login, register }
