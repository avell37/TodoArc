import { ITodos } from "./ITodos";

export interface IUser {
    id: string,
    email: string,
    username: string,
    password: string,
    todos: ITodos[]
}