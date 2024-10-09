import { Schema } from "mongoose"
import ITodo from "../interfases/ITodo"

export const todoSchema = new Schema<ITodo>({
    titel: {
        type: String,
        required: true
    }
})