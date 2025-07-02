"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const globalErrorHandler_1 = __importDefault(require("./middlewares/globalErrorHandler"));
const nontFound_1 = __importDefault(require("./middlewares/nontFound"));
const routes_1 = __importDefault(require("./routes"));
const app = (0, express_1.default)();
// const userRouter = express.Router()
app.use((0, cors_1.default)());
app.use(express_1.default.json());
// app.get('/api/v1/users', (req: Request, res: Response) => {
//   const users = [
//     {
//       id: 1,
//       name: 'Rahul',
//       email: 'rahul@gmail.com',
//     },
//   ]
//   res.status(200).json({
//     message: 'User Data Fetched Successfully',
//     status: 'Success',
//     data: users,
//   })
// })
// app.use('/api/v1', userRouter)
// app.use('/api/v1/users', UserRouter)
// app.use('/api/v1/tours', TourRouter)
app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.use('/api/v1', routes_1.default);
// userRouter.get('/users')
// catch all routes
app.use('*', nontFound_1.default);
// app.use('*', (req: Request, res: Response) => {
//   res.status(200).json({
//     status: 'Failed',
//     message: `Route Not Found for ${req.originalUrl}`,
//   })
// })
app.use(globalErrorHandler_1.default);
//global error handler
// app.use((err: any, req: Request, res: Response, next: NextFunction) => {
//   const message =
//     `${err.message} error from global error handler` || 'Something went wrong'
//   const statusCode = err.statusCode || 500
//   const status = err.status || 'error'
//   res.status(statusCode).json({
//     message: message,
//     status: status,
//   })
//   next()
// })
// app.use('*', (req: Request, res: Response) => {
//   res.status(200).json({
//     status: 'Failed',
//     message: `Route Not Found for ${req.originalUrl}`,
//   })
// })
exports.default = app;
