import app from './app'
// getting-started.js
import mongoose from 'mongoose'
import config from './config'
const port = 5000

async function server() {
  try {
    await mongoose.connect(config.database_url_local)

    // console.log('Connected to MongoDB')
    app.listen(port, () => {
      console.log(`Connected to port ${config.port}`)
    })
  } catch (error) {
    console.log(error)
  }
}
server()
