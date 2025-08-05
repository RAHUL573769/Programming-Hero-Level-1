import express from 'express'
import { userController } from '../controllers/user.controller'
import { checkAuth } from '../auth/checkAuth'

const router = express.Router()

router.post(
  '/create-user',
  checkAuth('user', 'admin'),
  userController.createUser,
)
router.get(
  '/',
  checkAuth('user', 'admin'),

  // ['user', 'admin']
  userController.getAllUsers,
)
router.get('/:id', userController.getSingleUser)
router.patch('/:id', userController.updateUser)
router.delete('/:id', userController.deleteUser)

export const userRoutes = router
