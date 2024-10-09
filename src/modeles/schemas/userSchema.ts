import mongoose from "mongoose"
import IUser from "../interfases/IUser"
import { todoSchema } from "./todoSchema"

export const userSchema = new mongoose.Schema<IUser>({
    user_name: {
        type: String,
        required: [true, "user name is requirea"],
        minlength: [5, "short name"],
    },
    todos: {
        type: [todoSchema],
        default: []
    }
})

export const UserModel = mongoose.model("user", userSchema)