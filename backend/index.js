import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import { config } from "dotenv"

const app = express()
config()

app.use(express.json())
app.use(cors())

const PORT = process.env.PORT || 4000

async function start() {
  try {
    await mongoose.connect(process.env.MONGODB_URI)
    app.listen(PORT, () => console.log(`Server started on ${PORT} port`))
  } catch (e) {
    console.log('DB error:', e)
    process.exit(1)
  }
}

start()