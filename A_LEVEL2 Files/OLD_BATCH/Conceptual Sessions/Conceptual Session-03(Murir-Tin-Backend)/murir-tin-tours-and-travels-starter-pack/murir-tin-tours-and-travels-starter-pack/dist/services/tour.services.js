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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TourServices = void 0;
const tour_model_1 = __importDefault(require("../models/tour.model"));
const filters_1 = require("../helpers/filterHelpers/filters");
const createTour = (tourData) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield tour_model_1.default.create(tourData);
    return result;
});
// type TQueryObj = {
//   [key: string]: unknown
//   page?: string
//   searchTerm?: string
//   limit?: string
//   sort?: string
//   sortBy?: string
//   sortOrder?: string
//   fields?: string
// }
// const filter = <T>(model: Query<T[], T>, queryObj: TQueryObj) => {
//   // queryObj.fields
//   const excludeObj = [
//     'page',
//     'searchTerm',
//     'limit',
//     'sort',
//     'sortBy',
//     'sortOrder',
//     'fields',
//   ]
//   excludeObj.forEach((keyword) => delete queryObj[keyword])
//   const modelQuery = model.find(queryObj)
//   return modelQuery
// }
const getTour = (query) => __awaiter(void 0, void 0, void 0, function* () {
    // const queryObj = { ...query }
    // console.log(queryObj, 'Before Delete')
    // const excludeObj = [
    //   'page',
    //   'searchTerm',
    //   'limit',
    //   'sort',
    //   'sortBy',
    //   'sortOrder',
    //   'fields',
    // ]
    // excludeObj.forEach((keyword) => delete queryObj[keyword])
    // console.log(queryObj, 'After Delete')
    // const result = await Tour.find(query)
    // return result
    const result = yield (0, filters_1.filter)(tour_model_1.default.find({ price: { $lt: 1200 } }), query);
    return result;
});
const getSingleTour = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield tour_model_1.default.findById(id);
    return result;
});
exports.TourServices = { createTour, getTour, getSingleTour };
