import { NextFunction, Request, Response } from 'express'
import catchAsyncFunction from '../utils/catchAsync'
import User from '../models/user.model'
import { USER_ROLE } from '../constants/user.constants'

export const checkAuth = (
  // ...roles: string[]
  // ...roles: [keyof typeof USER_ROLE]

  ...roles: Array<keyof typeof USER_ROLE>
) => {
  return catchAsyncFunction(
    async (req: Request, res: Response, next: NextFunction) => {
      const email = req.body.email
      const password = req.body.password
      console.log(email, password)

      const user = await User.findOne({ email })
      //Authentication
      if (!user) {
        // res.status(403).json({
        //   status: 'Failed',
        //   message: 'Invalid Email',
        // })

        throw new Error('Invalid Email and Password')
      }

      if (!roles.includes(user?.role)) {
        res
          .status(403)
          .json({ status: 'Failed', message: 'Invalid user password' })
      }
      next()
    },
  )
}
