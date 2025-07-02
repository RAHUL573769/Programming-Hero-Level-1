/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextFunction, Request, Response } from 'express'
import { UserServices } from '../services/user.services'
import { sendResponse } from '../utils/sendResponse'
import { catchAsync } from '../utils/catchAsync'

// type TSuccessResponse<T> = {
//   statusCode: number
//   status: 'success'
//   message: string
//   data?: T | T[] | null
//   error?: any
// }
// const sendResponse = <T>(res: Response, data: TSuccessResponse<T>) => {
//   res.status(data.statusCode).json({
//     message: data.message,
//     status: data.message,
//     data: data.data,
//   })
// }
const createUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const userData = req.body

    const result = await UserServices.createUser(userData)

    // res.status(200).json({
    //   message: 'User Created Successfully',
    //   status: 'Success',
    //   data: result,
    // })
    sendResponse(res, {
      message: 'Data Crated Successfully',
      statusCode: 201,
      status: 'success',
      data: result,
    })
  } catch (error: any) {
    next(error)
    res.status(500).json({
      message: 'User Creation Failed',
      status: 'Failed',
    })
  }
}

const getSingleUser = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const id = req.params.id

    const result = await UserServices.getSingleUser(id)

    res.status(200).json({
      message: 'Single User Fetched Succesfully',
      status: 'Success',
      data: result,
    })
    // eslint-disable-next-line @typescript-eslint/no-explicit-any

    // catch (error: any) {
    //   res.status(500).json({
    //     message: 'User Fetched Failed',
    //     status: 'Failed',
    //     data: error,
    //   })

    //   next(error)
    // }
  },
)

const getAllUser = async (req: Request, res: Response) => {
  try {
    const result = await UserServices.getAllUser()

    res.status(200).json({
      message: 'All User Fetched Succesfully',
      status: 'Success',
      data: result,
    })
  } catch (error: any) {
    res.status(500).json({
      message: 'Single User Fetched Failed',
      status: 'Failed',
      data: error,
    })
  }
}

const updateUser = async (req: Request, res: Response) => {
  try {
    const id = req.params.id
    const data = req.body
    console.log('67', req.body)
    const result = await UserServices.updateUser(id, data)
    console.log(result)
    res.status(200).json({
      message: ' User Updates Succesfully',
      status: 'Success',
      data: result,
    })
  } catch (error: any) {
    res.status(500).json({
      message: 'User Updates Failed',
      status: 'Failed',
      data: error,
    })
  }
}

export const UserController = {
  createUser,
  getAllUser,
  getSingleUser,
  updateUser,
}
