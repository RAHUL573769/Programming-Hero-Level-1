/* eslint-disable @typescript-eslint/no-explicit-any */
import { Response } from 'express'

type TSuccessResponse<T> = {
  statusCode: number
  status: 'success'
  message: string
  data?: T | T[] | null
  error?: any
}
export const sendResponse = <T>(res: Response, data: TSuccessResponse<T>) => {
  res.status(data.statusCode).json({
    message: data.message,
    status: data.message,
    data: data.data,
  })
}
