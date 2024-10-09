import { Request, Response } from "express"
import { createUser } from "../services/userService"

export const registerUser = async (req: Request, res: Response) => {
    try {
        await createUser(req.body)
        res.status(201).send("User created successfuly")
    } catch (err) {
        console.log(err)
        res.status(400).send("bad request")
    }
}

