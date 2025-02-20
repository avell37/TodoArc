import { ITodos } from "../../../models/ITodos"

export interface IState {
    todos: ITodos[],
    todosLoadingStatus: 'idle' | 'loading' | 'error',
    todosFilter: string,
    searchValue: string
}