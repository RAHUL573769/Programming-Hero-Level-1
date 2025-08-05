import { NextFunction, Request, Response } from 'express'
import catchAsyncFunction from '../utils/catchAsync'
import User from '../models/user.model'
import { USER_ROLE } from '../constants/user.constants'

export const checkAuth = (...roles: Array<keyof typeof USER_ROLE>) => {
  console.log('Roles', roles)
  return catchAsyncFunction(
    async (req: Request, res: Response, next: NextFunction) => {
      const email = req.body.email
      const password = req.body.password
      console.log(email, password)

      const user = await User.findOne({ email, password })
      if (!user) {
        res.status(403).json({
          status: 'Failed',
          message: 'Imvalid User',
        })
      }

      if (!roles.includes(user?.role)) {
        res.status(403).json({
          status: 'Failed',
          message: 'You are not Authorized',
        })
      }
      next()
    },
  )
}
