import { Document, Query, Schema, model } from 'mongoose'
import { IUser } from '../interfaces/user.interface'
import { USER_ROLE, USER_STATUS } from '../constants/user.constants'

const userSchema = new Schema<IUser>({
  name: {
    type: String,
    required: [true, 'Please tell us your name'],
    unique: true,
  },
  age: {
    type: Number,
    required: [true, 'Please tell us your age'],
  },
  email: {
    type: String,
    unique: true,
    required: [true, 'Please tell us your email'],
    lowercase: true,
  },
  password: { type: String, select: 0 },
  passwordChangedAt: { type: Date, default: Date.now() },
  photo: String,
  role: {
    type: String,
    enum: Object.values(USER_ROLE),
    default: 'user',
  },
  userStatus: {
    type: String,
    enum: Object.values(USER_STATUS),
    default: USER_STATUS.active,
  },
})

//Pre Hook for Query Middleware
userSchema.pre(/^find/, function (this: Query<IUser, Document>, next) {
  this.find({ userStatus: { $eq: 'active' } })
  next()
})

// userSchema.pre("findOne", function (next) {
//     this.findOne({userStatus : { $eq : "active"}})
//     next()
// });

const User = model<IUser>('User', userSchema)

export default User
