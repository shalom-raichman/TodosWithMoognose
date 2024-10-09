import Todo from "./Todo"

export default class User {
    public _id?: string
    public todos: Todo[] = []
    constructor(
        public name: string,
    ) {

    }
}