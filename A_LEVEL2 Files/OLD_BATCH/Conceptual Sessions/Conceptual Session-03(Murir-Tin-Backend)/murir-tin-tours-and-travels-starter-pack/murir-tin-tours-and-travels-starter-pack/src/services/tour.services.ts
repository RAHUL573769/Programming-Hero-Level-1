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
// const getTour = async (query: any): Promise<ITour[]> => {
const getTour = async (query: TQueryObj): Promise<ITour[]> => {
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
  console.log('Query', query)

  // const result = await filter(Tour.find(), query)

  const modelQuery = filter(Tour.find(), query)
  // const result = await filter(Tour.find({ price: { $lt: 1200 } }), query)

  //partial match

  if (query.searchTerm) {
    // console.log(modelQuery.model.schema.path('name'), 'Model Query Path')--->Path Function
    // console.log(modelQuery.model.schema.paths, 'Model Query Paths')
    const fieldValues = Object.values(modelQuery.model.schema.paths)
    const searchableFields = fieldValues
      .filter((fieldObj) => {
        if (fieldObj.instance === 'String') {
          return true
        }
      })
      .map((fieldObj) => ({
        [fieldObj.path]: { $regex: query.searchTerm, $options: 'i' },
      }))
    console.log(searchableFields, 'searchableFields')

    // .map((fieldObj) =>  [fieldObj.path]: { $regex: query.searchTerm, $options: 'i' }

    // console.log('Field Values', fieldValues)
    // console.log('Searchale Fields', searchableFields)

    modelQuery.find({
      // name: { $regex: query.searchTerm, $options: 'i' },

      $or: searchableFields,
    })
  }
  const result = await modelQuery
  return result
  // return result
}

const getSingleTour = async (id: string): Promise<ITour | null> => {
  const result = await Tour.findById(id)
  return result
}

export const TourServices = { createTour, getTour, getSingleTour }
