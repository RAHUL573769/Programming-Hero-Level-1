/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import { Request, Response } from 'express'
import User from '../models/user.model'

const createUserController = async (req: Request, res: Response) => {
  // eslint-disable-next-line no-empty
  try {
    const userData = req.body

    const result = await User.create(userData)
    console.log(result)
    res.status(201).json({
      message: 'User Created Sucesfully',
      status: 'Success',
      data: result,
    })

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    res.status(500).json({
      message: error.message || 'Something went wrong',
      status: 'fail',
    })
  }
}
export const UserController = {
  createUserController,
}
