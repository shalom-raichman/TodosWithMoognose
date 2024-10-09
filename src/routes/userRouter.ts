import { Router } from "express"
import {addTodo, registerUser} from "../controllers/userController"

const router = Router()

router.post("/register", registerUser)

router.post("/addTodo", addTodo)

export default router