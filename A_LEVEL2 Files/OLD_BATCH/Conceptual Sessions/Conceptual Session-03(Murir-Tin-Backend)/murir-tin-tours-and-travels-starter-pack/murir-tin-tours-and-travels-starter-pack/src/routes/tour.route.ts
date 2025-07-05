/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import express, { NextFunction, Request, Response } from 'express'
import { TourController } from '../controllers/tour.controller'
import { createTourZodSchema } from '../middlewares/zodMiddleWare'

import { validateRequest } from '../middlewares/validateRequests'
const router = express.Router()

// const validateRequest = async (zodSchema: any, body: any) => {
//   const validatedData = await zodSchema.safeParseAsync(body)
//   // const validatedData = createTourZodSchema.parse(req.body)

//   if (!validatedData.success) {
//     throw new Error('Validation Failed')
//   } else {
//     return validatedData.data
//   }
// }
// const validateRequest = (schema: ZodSchema) => {
//   return async (req: Request, res: Response, next: NextFunction) => {
//     const result = await schema.safeParseAsync(req.body)

//     if (!result.success) {
//       next(result.error)
//     } else {
//       req.body = result.data
//       next()
//     }
//   }
// }
router.get('/get-tours', TourController.getAllTours)
router.post('/create-tours', TourController.createTour)
// router.post(
//   '/create-tours',
//   async (req: Request, res: Response, next: NextFunction) => {
//     const validatedData = await createTourZodSchema.safeParseAsync(req.body)
//     const validatedData = createTourZodSchema.parse(req.body)

//     if (!validatedData.success) {
//       throw new Error('Validation Failed')
//     } else {
//       req.body = validatedData.data
//     }
//     next()
//   },
//   TourController.createTour,
// )
// router.post(
//   '/create-tours',
//   async (req: Request, res: Response, next: NextFunction) => {
//     const result = await validateRequest(createTourZodSchema, req.body)

//     if (!result.success) {
//       next(result)
//     } else {
//       req.body = result
//       next()
//     }
//   },
//   TourController.createTour,
// )
router.post(
  '/create-tours',
  validateRequest(createTourZodSchema),
  TourController.createTour,
)
router.get('/:id', TourController.getSpecificTours)
// router.get(
//   '/:id',
//   (req: Request, res: Response, next: NextFunction) => {
//     console.log(req.body)
//     res.status(200).json({
//       body: req.body,
//     })
//   },
//   TourController.getSpecificTours,
// )

// router.patch('/update-tours/:id', TourController.updateSpecificTours)
// router.delete('/delete-tour/:id', TourController.deleteTour)

export const TourRouter = router
