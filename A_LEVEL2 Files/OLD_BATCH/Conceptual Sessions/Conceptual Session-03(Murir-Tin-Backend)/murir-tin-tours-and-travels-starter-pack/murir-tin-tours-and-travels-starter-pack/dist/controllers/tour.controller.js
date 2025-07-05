"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TourController = void 0;
const tour_services_1 = require("../services/tour.services");
const catchAsync_1 = require("../utils/catchAsync");
const sendResponse_1 = require("../utils/sendResponse");
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
const createTour = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const validatedData = req.body;
    // const validatedData = createTourZodSchema.parse(userData)
    // if (!validatedData) {
    //   throw new Error('Validation Failed')
    // }
    const data = yield tour_services_1.TourServices.createTour(validatedData);
    // const data = await TourServices.createTour(userData)
    // res.status(200).json({
    //   message: 'Tour Data Created',
    //   status: 'Success',
    //   data: data,
    // })
    (0, sendResponse_1.sendResponse)(res, {
        statusCode: 201,
        status: 'success',
        message: 'Tour Created Successfully',
        data: data,
    });
}));
const getAllTours = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const query = req.query;
        console.log(query);
        const getTours = yield tour_services_1.TourServices.getTour(query);
        res.status(200).json({
            message: 'Tour Data Fetched',
            status: 'Success',
            data: getTours,
        });
    }
    catch (error) {
        // res.status(500).json({
        //   message: error.message,
        //   status: 'Failed To get Data',
        // })
        next(error);
    }
});
const getSpecificTours = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const data = yield tour_services_1.TourServices.getSingleTour(id);
        res.status(200).json({
            message: 'Single Tour Data Fetched',
            status: 'Success',
            data: data,
        });
    }
    catch (error) {
        res.status(500).json({
            message: error.message,
            status: 'Failed To get Single Data',
        });
    }
});
exports.TourController = { createTour, getAllTours, getSpecificTours };
