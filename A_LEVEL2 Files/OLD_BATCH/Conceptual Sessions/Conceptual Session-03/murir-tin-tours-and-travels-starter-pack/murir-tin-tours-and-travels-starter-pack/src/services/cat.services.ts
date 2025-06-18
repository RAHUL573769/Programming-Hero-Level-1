import { ICat } from '../interface/Cat.interface'
import { Cat } from '../model/catModel'

const addCat = async function (catData: ICat): Promise<ICat> {
  const result = await Cat.create(catData)
  return result
}

const getCat = async (): Promise<ICat[]> => {
  const data = await Cat.find()
  return data
}

export const CatServices = { addCat, getCat }
