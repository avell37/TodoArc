import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getUserByUserID } from "../../../api/todosApi";
import { addUserTodo } from "../../../api/todosApi";
import Cookies from 'js-cookie';

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

const initialState = {
    todos: [],
    todosLoadingStatus: 'idle'
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
            state.todos = state.todos.filter((todo) => todo.id !== action.payload);
        },
        makeCompleted: (state, action) => {
            const todo = state.todos.find((todo) => todo.id === action.payload);
            if (todo) {
                todo.completed = !todo.completed;
            }
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

export const {addTodo, deleteTodo, makeCompleted} = userTodosSlice.actions;