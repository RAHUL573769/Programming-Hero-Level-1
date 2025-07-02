import { TourRouter } from '../routes/tour.route'
import { UserRouter } from '../routes/user.route'

const routes = [
  { path: '/users', route: UserRouter },
  { path: '/tours', route: TourRouter },
]

export default routes
