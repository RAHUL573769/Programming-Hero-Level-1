import { Request, Response } from 'express'

const notFound = (req: Request, res: Response) => {
  res.status(200).json({
    status: 'Failed',
    message: `Route Not Found for ${req.originalUrl}`,
  })
}

export default notFound
