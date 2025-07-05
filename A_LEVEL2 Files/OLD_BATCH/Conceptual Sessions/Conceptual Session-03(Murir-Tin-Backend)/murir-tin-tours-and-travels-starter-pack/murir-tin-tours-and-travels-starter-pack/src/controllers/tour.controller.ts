/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextFunction, Request, RequestHandler, Response } from 'express'
import { TourServices } from '../services/tour.services'
import { catchAsync } from '../utils/catchAsync'
import { sendResponse } from '../utils/sendResponse'
import z from 'zod'
import { createTourZodSchema } from '../middlewares/zodMiddleWare'
// const createTourZodSchema = z.object({
//   body: z.string(),
//   durationHours: z.number().int().positive().min(1),
//   ratingsAverage: z.number().int().positive().min(1).max(5),
//   price: z.number(),
// })
//HOF - Higher Order Function
// recieves a function as an argument/ parameter and / or returns a function
// const catchAsyncFunction = (fn: RequestHandler) => {
//   return (req: Request, res: Response, next: NextFunction) => {
//     Promise.resolve(fn(req, res, next)).catch((error: any) => next(error))
//   }
//   //{
//   // name : 'Rahim',
//   // age: 30
//   // }
// }
// X calls Y -> Y call Z
//catchAsync --> call korle ekta function ashbe -> shei function ke router call korbe sathe req, res,next diye dibe -> jei function ta router call korsilo shei function  amader nijosho function call kore dibe with req, res next
// const createTour = (req: Request, res: Response, next: NextFunction) => {
//   Promise.resolve(fn(req, res, next)).catch((error: any) => next(error))

//    catchAsyncFunction(async (req: Request, res: Response) => {
//      const tourData = req.body
//      const result = await tourServices.createTour(tourData)
//      sendSuccessResponse(res, {
//        statusCode: 201,
//        message: 'Tour created successfully',
//        data: result,
//      })
//    })
// }

//middleware e data validate kore req.body data put kore

// const catchAsyncFunction = (fn: RequestHandler) => {
//   return (req: Request, res: Response, next: NextFunction) => {
//     Promise.resolve(fn(req, res, next)).catch((error: any) => next(error))
//   }
// }

// const createTour = async (req: Request, res: Response) => {
//   try {
//     const userData = req.body
//     const data = await TourServices.createTour(userData)

//     res.status(200).json({
//       message: 'Tour Data Created',
//       status: 'Success',
//       data: data,
//     })
//   } catch (error: any) {
//     res.status(500).json({
//       message: error.message,
//       status: 'Failed',
//     })
//   }
// }
const createTour = catchAsync(async (req: Request, res: Response) => {
  const validatedData = req.body

  // const validatedData = createTourZodSchema.parse(userData)

  // if (!validatedData) {
  //   throw new Error('Validation Failed')
  // }
  const data = await TourServices.createTour(validatedData)
  // const data = await TourServices.createTour(userData)

  // res.status(200).json({
  //   message: 'Tour Data Created',
  //   status: 'Success',
  //   data: data,
  // })
  sendResponse(res, {
    statusCode: 201,
    status: 'success',
    message: 'Tour Created Successfully',
    data: data,
  })
})

const getAllTours = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const query = req.query
    console.log(query)
    const getTours = await TourServices.getTour(query)

    res.status(200).json({
      message: 'Tour Data Fetched',
      status: 'Success',
      data: getTours,
    })
  } catch (error: any) {
    // res.status(500).json({
    //   message: error.message,
    //   status: 'Failed To get Data',
    // })

    next(error)
  }
}

const getSpecificTours = async (req: Request, res: Response) => {
  try {
    const id = req.params.id
    const data = await TourServices.getSingleTour(id)

    res.status(200).json({
      message: 'Single Tour Data Fetched',
      status: 'Success',
      data: data,
    })
  } catch (error: any) {
    res.status(500).json({
      message: error.message,
      status: 'Failed To get Single Data',
    })
  }
}

export const TourController = { createTour, getAllTours, getSpecificTours }
