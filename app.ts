import express, { Express } from 'express'
import { router } from './routers/mainRouter'
const app: Express = express()

app.use(express.json())
app.use('/user', router)

export { app }