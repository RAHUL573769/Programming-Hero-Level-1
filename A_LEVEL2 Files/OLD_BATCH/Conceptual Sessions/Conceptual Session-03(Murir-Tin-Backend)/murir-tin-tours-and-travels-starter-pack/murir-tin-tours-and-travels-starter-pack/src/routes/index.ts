/* eslint-disable @typescript-eslint/no-explicit-any */
import express from 'express'
// import { UserRouter } from './user.route'
// import { TourRouter } from './tour.route'
import routes from '../constants/router.constants'

const globalRouter = express.Router()

// globalRouter.use('/users', UserRouter)
// globalRouter.use('/tours', TourRouter)

// const routes = [
//   { path: '/users', route: UserRouter },
//   { path: '/tours', route: TourRouter },
// ]

routes.forEach((routerObj: any) => {
  globalRouter.use(routerObj.path, routerObj.route)
})

export default globalRouter
