import ITodo from "./ITodo"

export default interface IUser extends Document {
    user_name: string,
    todos: ITodo[]
}