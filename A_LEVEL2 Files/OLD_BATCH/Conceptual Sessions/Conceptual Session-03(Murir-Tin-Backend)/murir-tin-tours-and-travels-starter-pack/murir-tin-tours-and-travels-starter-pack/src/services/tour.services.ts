/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Query } from 'mongoose'
import { ITour } from '../interface/tour.interface'
import Tour from '../models/tour.model'
import { TQueryObj } from '../types/TQueryObject'
import { filter } from '../helpers/filterHelpers/filters'

const createTour = async (tourData: any): Promise<ITour> => {
  const result = await Tour.create(tourData)
  return result
}

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
const getTour = async (query: any): Promise<ITour[]> => {
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

  const result = await filter(Tour.find({ price: { $lt: 1200 } }), query)
  return result
}

const getSingleTour = async (id: string): Promise<ITour | null> => {
  const result = await Tour.findById(id)
  return result
}

export const TourServices = { createTour, getTour, getSingleTour }
