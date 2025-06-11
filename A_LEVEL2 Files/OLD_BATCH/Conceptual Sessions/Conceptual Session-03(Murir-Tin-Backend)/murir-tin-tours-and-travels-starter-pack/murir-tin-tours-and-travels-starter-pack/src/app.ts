import express, { Application, Request, Response } from 'express'
import { userRoutes } from './routes/user.route'
const app: Application = express()

const userRouter = express.Router()

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!')
})

// app.get('/api/v1/users', (req: Request, res: Response) => {
//   const users = [
//     {
//       id: 1,
//       name: 'Rahul',
//       email: 'rahul@gmail.com',
//     },
//   ]

//   res.status(200).json({
//     message: 'User Data Fetched Successfully',
//     status: 'Success',
//     data: users,
//   })
// })
app.use('/api/v1', userRouter)

app.use('/api/v1/users', userRoutes)

userRouter.get('/users', (req: Request, res: Response) => {
  const users = [
    {
      id: 1,
      name: 'Rahul',
      email: 'rahul@gmail.com',
    },
  ]

  res.status(200).json({
    message: 'User Data Fetched Successfully',
    status: 'Success',
    data: users,
  })
})

export default app
