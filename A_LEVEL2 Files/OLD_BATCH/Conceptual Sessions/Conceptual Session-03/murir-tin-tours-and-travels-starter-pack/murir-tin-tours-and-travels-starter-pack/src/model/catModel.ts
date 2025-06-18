import { model, Schema } from 'mongoose'
import { ICat } from '../interface/Cat.interface'

const catSchema = new Schema<ICat>({
  id: {
    type: Number,
    // required: true,
    // unique: true,
  },

  name: {
    type: String,
    // required: true,
  },
  age: {
    type: Number,
  },
  color: {
    type: String,
  },
  secret: { type: String },
})
export const Cat = model('Cat', catSchema)
