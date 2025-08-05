/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import express from 'express'

import { NextFunction, Request, Response } from 'express'
import { AuthController } from './auth.controller'

const router = express.Router()
router.post('/create-user', AuthController.register)
router.post('/login', AuthController.login)

export const authRoutes = router
