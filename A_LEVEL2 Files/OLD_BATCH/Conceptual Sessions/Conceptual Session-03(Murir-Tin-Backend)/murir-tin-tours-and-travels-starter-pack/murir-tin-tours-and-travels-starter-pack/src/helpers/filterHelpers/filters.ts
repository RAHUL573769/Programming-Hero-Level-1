import { Query } from 'mongoose'
import { TQueryObj } from '../../types/TQueryObject'

export const filter = <T>(model: Query<T[], T>, query: TQueryObj) => {
  // queryObj.fields

  const queryObj = { ...query }
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
  // excludeObj.forEach((keyword) => delete query[keyword])
  const modelQuery = model.find(queryObj)
  return modelQuery
}
