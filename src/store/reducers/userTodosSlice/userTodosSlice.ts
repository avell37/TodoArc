import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getTodosByUserID } from "../../../api/todosApi";
import { addUserTodo } from "../../../api/todosApi";
import Cookies from 'js-cookie';

export const fetchUserTodos = createAsyncThunk(
    'user/todos',
    async (userID) => {
        const res = await getTodosByUserID(userID)
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

export const {addTodo} = userTodosSlice.actions;