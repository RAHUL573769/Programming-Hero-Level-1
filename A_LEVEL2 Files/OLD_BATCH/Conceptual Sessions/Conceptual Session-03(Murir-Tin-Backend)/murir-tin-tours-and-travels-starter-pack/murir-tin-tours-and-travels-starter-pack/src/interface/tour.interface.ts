/* eslint-disable @typescript-eslint/ban-types */
import { Model } from 'mongoose'

interface ITour {
  name: string
  durationHours: number
  ratingAverage: number
  ratingQuantity: number
  price: number
  imageCover: string
  images: string[]

  createdAt: Date
  startDate: Date[]
  startLocation: string
  location: string[]
  slug: string
}

interface ITourMethods {
  getNearestStartDateAndEndDate(): {
    NearestStartDate: Date
    estimatedEndDate: Date
  }
}
type TTourModel = Model<ITour, {}, ITourMethods>
export { ITour, ITourMethods, TTourModel }

// ;[
//   {
//     name: 'Explore the Majestic Himalayas',
//     durationHours: 72,
//     ratingAverage: 4.8,
//     ratingQuantity: 120,
//     price: 450,
//     imageCover: 'himalayas-tour-cover.jpg',
//     images: ['himalayas1.jpg', 'himalayas2.jpg', 'himalayas3.jpg'],
//     createdAt: '2025-06-01T10:30:00Z',
//     startDate: ['2025-07-01T08:00:00Z', '2025-07-15T08:00:00Z'],
//     startLocation: 'Kathmandu, Nepal',
//     location: ['Lukla', 'Namche Bazaar', 'Everest Base Camp'],
//     slug: 'explore-the-majestic-himalayas',
//   },
//   {
//     name: 'Discover Ancient Rome',
//     durationHours: 48,
//     ratingAverage: 4.6,
//     ratingQuantity: 85,
//     price: 300,
//     imageCover: 'rome-tour-cover.jpg',
//     images: ['colosseum.jpg', 'vatican.jpg', 'pantheon.jpg'],
//     createdAt: '2025-06-05T12:00:00Z',
//     startDate: ['2025-07-10T09:00:00Z', '2025-07-25T09:00:00Z'],
//     startLocation: 'Rome, Italy',
//     location: ['Colosseum', 'Vatican City', 'Roman Forum'],
//     slug: 'discover-ancient-rome',
//   },
//   {
//     name: 'Safari Adventure in Kenya',
//     durationHours: 60,
//     ratingAverage: 4.9,
//     ratingQuantity: 200,
//     price: 600,
//     imageCover: 'kenya-safari-cover.jpg',
//     images: ['safari1.jpg', 'safari2.jpg', 'safari3.jpg'],
//     createdAt: '2025-06-10T15:00:00Z',
//     startDate: ['2025-08-01T06:00:00Z', '2025-08-20T06:00:00Z'],
//     startLocation: 'Nairobi, Kenya',
//     location: ['Maasai Mara', 'Lake Nakuru', 'Amboseli National Park'],
//     slug: 'safari-adventure-in-kenya',
//   },
// ]
