import express from 'express'
import { UserController } from '../controllers/user.controllrer'

const router = express.Router()

router.post('/create-user', UserController.createUserController)

export const userRoutes = router
