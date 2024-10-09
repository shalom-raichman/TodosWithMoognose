import { Request, Response } from "express"
import { createUser, updateUserTodo } from "../services/userService"
import addTodoDTO from "../DTO/addTodoDTO"

export const registerUser = async (req: Request, res: Response) => {
    try {
        await createUser(req.body)
        res.status(201).send("User created successfuly")
    } catch (err) {
        console.log(err)
        res.status(400).send("bad request")
    }
}

export const addTodo = async (
    req: Request<any, any, addTodoDTO>,
    res: Response) => {
    try {
        await updateUserTodo(req.body.userId, req.body.todoTitel)
        res.status(201).send("todo added successfuly")
    } catch (err) {
        res.status(400).send("bad request")

    }
}