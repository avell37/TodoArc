import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getUserByUserID } from "../../../api/todosApi";
import { addUserTodo } from "../../../api/todosApi";
import Cookies from 'js-cookie';
import { ITodos } from "../../../models/ITodos";

export const fetchUserTodos = createAsyncThunk(
    'user/todos',
    async (userID: string) => {
        const res = await getUserByUserID(userID)
        if (res?.todos) {
            return res.todos
        }
        return []
    }
)

interface IState {
    todos: [],
    todosLoadingStatus: string,
    todosFilter: string | null,
}

const initialState: IState = {
    todos: [],
    todosLoadingStatus: 'idle',
    todosFilter: null
}

const userTodosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const userID = Cookies.get("userID")
            addUserTodo(userID, action.payload);
            state.todos.push(action.payload)
        },
        deleteTodo: (state, action) => {
            state.todos = state.todos.filter((todo: ITodos) => todo.id !== action.payload);
        },
        makeCompleted: (state, action) => {
            const todo = state.todos.find((todo: ITodos) => todo.id === action.payload);
            if (todo) {
                todo.completed = !todo.completed;
            }
        },
        editTodo: (state, action) => {
            const {id, title} = action.payload
            const todo = state.todos.find((todo: ITodos) => todo.id === id);
            if (todo) {
                todo.title = title;
            }
        },
        selectTodosFilter: (state, action) => {
            state.todosFilter = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchUserTodos.pending, (state) => {
                state.todosLoadingStatus = "loading"
            })
            .addCase(fetchUserTodos.fulfilled, (state, action) => {
                state.todos = action.payload;
                state.todosLoadingStatus = "idle"
            })
            .addCase(fetchUserTodos.rejected, (state) => {
                state.todosLoadingStatus = "error"
            })
    }
})

export const todosReducer = userTodosSlice.reducer;

export const {addTodo, deleteTodo, makeCompleted, editTodo, selectTodosFilter} = userTodosSlice.actions;