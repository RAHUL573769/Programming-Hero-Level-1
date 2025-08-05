/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */

import config from '../config'
import { IUser } from '../interfaces/user.interface'
import User from '../models/user.model'
import jwt, { JwtPayload } from 'jsonwebtoken'
import { ILogin, IRegister } from './auth.constanrs'

const loginUser = async (payload: ILogin) => {
  // const user = await User.findOne({ email: payload.email })
  console.log(payload)
  // if (!user) {
  //   throw new Error('Invalid credentials')
  // }
  // const jwtPayload: JwtPayload = {
  //   email: user.email,
  //   role: user.role,
  // }
  // const accessToken = jwt.sign(jwtPayload, config.jwt_access_secret, {
  //   expiresIn: config.jwt_access_expires_in,
  // })

  // const accessToken = jwt.sign(jwtPayload, config.jwt_access_secret, {
  //   expiresIn: '1D',
  // })
  return null

  // return accessToken
}
const registerUser = async (payload2: IRegister) => {
  const result = await User.create({
    ...payload2,
    userStatus: 'active',
    role: 'user',
  })

  return result
}

export const AuthServices = { loginUser, registerUser }
