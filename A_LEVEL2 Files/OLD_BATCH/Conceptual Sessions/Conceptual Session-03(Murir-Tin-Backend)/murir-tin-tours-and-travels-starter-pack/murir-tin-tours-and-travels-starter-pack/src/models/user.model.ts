import { model, Schema } from 'mongoose'
import { IUser } from '../interface/user.interface'
import { USER_ROLE, USER_STATUS } from '../constants/user.constants'

const userSchema = new Schema<IUser>({
  name: {
    type: String,
    required: [true, 'Please Enter User Name'],
    unique: true,
  },

  age: { type: Number },

  email: {
    type: String,
    unique: true,
    lowercase: true,
    required: [true, 'Please Enter User Email'],
  },
  password: { type: String, required: [true, 'Please Enter Password'] },
  photo: {
    type: String,
  },

  role: {
    type: String,
    enum: Object.values(USER_ROLE),
    default: 'user',
  },

  userStatus: {
    type: String,
    enum: Object.values(USER_STATUS),
  },
})
//Pre hook for query middleware
// userSchema.pre('find', function (next) {
//   this.find({ userStatus: { $eq: 'active' } })
//   next()
// })

// userSchema.pre(/^find/, function (this: Query<IUser, Document>, next) {
//   this.find({ role: { $eq: 'user' } })
//   next()
// })

const User = model<IUser>('User', userSchema)
export default User
