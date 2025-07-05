import { Query } from 'mongoose'
import { TQueryObj } from '../../types/TQueryObject'

export const filter = <T>(model: Query<T[], T>, queryObj: TQueryObj) => {
  // queryObj.fields
  const excludeObj = [
    'page',
    'searchTerm',
    'limit',
    'sort',
    'sortBy',
    'sortOrder',
    'fields',
  ]

  excludeObj.forEach((keyword) => delete queryObj[keyword])
  const modelQuery = model.find(queryObj)
  return modelQuery
}
