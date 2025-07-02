"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/no-explicit-any */
const express_1 = __importDefault(require("express"));
// import { UserRouter } from './user.route'
// import { TourRouter } from './tour.route'
const router_constants_1 = __importDefault(require("../constants/router.constants"));
const globalRouter = express_1.default.Router();
// globalRouter.use('/users', UserRouter)
// globalRouter.use('/tours', TourRouter)
// const routes = [
//   { path: '/users', route: UserRouter },
//   { path: '/tours', route: TourRouter },
// ]
router_constants_1.default.forEach((routerObj) => {
    globalRouter.use(routerObj.path, routerObj.route);
});
exports.default = globalRouter;
