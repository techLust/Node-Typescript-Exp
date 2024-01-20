import expres from 'express'
import { createUser } from '../controllers/users.controller.db'
const router = expres.Router()

router.post('/', createUser)

export { router }