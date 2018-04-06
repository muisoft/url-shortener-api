import express from 'express'
import path from 'path'
import { router } from './routes/router'
const app = express()

app.use(express.static(path.join(__dirname, 'views')))
app.use(router)

app.listen(process.env.PORT)