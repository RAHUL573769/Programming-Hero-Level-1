import z from 'zod'

export const createTourZodSchema = z.object({
  body: z.string(),
  durationHours: z.number().int().positive().min(1),
  ratingsAverage: z.number().int().positive().min(1).max(5),
  price: z.number(),
})
