"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TourRouter = void 0;
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
const express_1 = __importDefault(require("express"));
const tour_controller_1 = require("../controllers/tour.controller");
const zodMiddleWare_1 = require("../middlewares/zodMiddleWare");
const validateRequests_1 = require("../middlewares/validateRequests");
const router = express_1.default.Router();
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
router.get('/get-tours', tour_controller_1.TourController.getAllTours);
router.post('/create-tours', tour_controller_1.TourController.createTour);
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
router.post('/create-tours', (0, validateRequests_1.validateRequest)(zodMiddleWare_1.createTourZodSchema), tour_controller_1.TourController.createTour);
router.get('/:id', tour_controller_1.TourController.getSpecificTours);
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
exports.TourRouter = router;
