import express from 'express'
const app = express()
import { router as programmingRouter } from './routes/programming.js'
import cors from 'cors'

app.use(cors())

app.use(express.json())

app.use('/programming',programmingRouter)

app.listen(5000)