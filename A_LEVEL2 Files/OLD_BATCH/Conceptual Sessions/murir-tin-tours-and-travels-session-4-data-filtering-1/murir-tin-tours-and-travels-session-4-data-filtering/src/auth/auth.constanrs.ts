import { IUser } from '../interfaces/user.interface'

export interface ILogin {
  email: string
  password: string
}
export interface IRegister
  extends Omit<IUser, 'userStatus' | 'role' | 'passwordChangedAt'> {}
