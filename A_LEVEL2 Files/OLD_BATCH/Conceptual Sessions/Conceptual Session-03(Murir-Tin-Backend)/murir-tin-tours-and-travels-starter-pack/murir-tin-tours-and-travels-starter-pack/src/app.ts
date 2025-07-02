/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import express, { Application, NextFunction, Request, Response } from 'express'
import cors from 'cors'
import { UserRouter } from './routes/user.route'
import { TourRouter } from './routes/tour.route'
import globalErrorHandler from './middlewares/globalErrorHandler'
import notFound from './middlewares/nontFound'
import globalRouter from './routes'
const app: Application = express()

// const userRouter = express.Router()
app.use(cors())
app.use(express.json())

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
// app.use('/api/v1', userRouter)
// app.use('/api/v1/users', UserRouter)

// app.use('/api/v1/tours', TourRouter)

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!')
})
app.use('/api/v1', globalRouter)
// userRouter.get('/users')
// catch all routes

app.use('*', notFound)

// app.use('*', (req: Request, res: Response) => {
//   res.status(200).json({
//     status: 'Failed',
//     message: `Route Not Found for ${req.originalUrl}`,
//   })
// })
app.use(globalErrorHandler)

//global error handler
// app.use((err: any, req: Request, res: Response, next: NextFunction) => {
//   const message =
//     `${err.message} error from global error handler` || 'Something went wrong'
//   const statusCode = err.statusCode || 500
//   const status = err.status || 'error'

//   res.status(statusCode).json({
//     message: message,
//     status: status,
//   })
//   next()
// })
// app.use('*', (req: Request, res: Response) => {
//   res.status(200).json({
//     status: 'Failed',
//     message: `Route Not Found for ${req.originalUrl}`,
//   })
// })

export default app
