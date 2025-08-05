interface IUser {
  name: string
  age: number
  email: string
  photo: string
  password: string
  passwordChangedAt: Date
  role: 'user' | 'admin'
  userStatus: 'active' | 'inactive'
}

export { IUser }
