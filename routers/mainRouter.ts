import expres from 'express'
import { createUser, deleteUser, getUser, updateUser } from '../controllers/users.controller.db'
import { checkUserExist } from '../middlewares/checkExistingUser'
const router = expres.Router()

router.post('/', checkUserExist, createUser)
router.get('/', getUser)
router.put('/:id', updateUser)
router.delete('/:id', deleteUser)

export { router } 