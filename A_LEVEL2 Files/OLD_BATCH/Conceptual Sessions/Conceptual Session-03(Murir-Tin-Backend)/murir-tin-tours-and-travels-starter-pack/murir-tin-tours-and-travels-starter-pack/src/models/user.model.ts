import { model, Schema } from 'mongoose'
import { IUser } from '../interface/user.interface'

const userSchema = new Schema<IUser>({
  name: { type: String },

  age: { type: Number },

  email: { type: String, unique: true, lowercase: true },
  photo: {
    type: String,
  },

  role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user',
  },

  userStatus: {
    type: String,
    enum: ['active', 'in-active'],
  },
})

const User = model<IUser>('User', userSchema)
export default User
