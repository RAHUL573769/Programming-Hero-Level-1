import express from 'express'
import { userController } from '../controllers/user.controller'

// import { checkAuth } from '../auth/checkAuth'

const router = express.Router()

router.post(
  '/create-user',
  //   checkAuth(['user', 'ad']),
  userController.createUser,
)
router.get('/', userController.getAllUsers)
router.get('/:id', userController.getSingleUser)
router.patch('/:id', userController.updateUser)
router.delete('/:id', userController.deleteUser)

export const userRoutes = router
