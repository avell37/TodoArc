import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getUserByUserID } from "../../../api/todosApi";
import { addUserTodo } from "../../../api/todosApi";
import Cookies from 'js-cookie';
import { ITodos } from "../../../models/ITodos";
import { IState } from "./types";

export const fetchUserTodos = createAsyncThunk<ITodos[], string>(
    'user/todos',
    async (userID) => {
        const res = await getUserByUserID(userID);
        return res?.todos || [];
    }
)

const initialState: IState = {
    todos: [],
    todosLoadingStatus: 'idle',
    todosFilter: "",
    searchValue: ""
}

const userTodosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, action: PayloadAction<ITodos>) => {
            const userID = Cookies.get("userID");
            if (userID) {
                addUserTodo(userID, action.payload);
                state.todos.push(action.payload);
            }
        },
        deleteTodo: (state, action: PayloadAction<string>) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload);
        },
        makeCompleted: (state, action: PayloadAction<string>) => {
            const todo = state.todos.find(todo => todo.id === action.payload);
            if (todo) {
                todo.completed = !todo.completed;
            }
        },
        editTodo: (state, action: PayloadAction<{ id: string, title: string }>) => {
            const {id, title} = action.payload;
            const todo = state.todos.find(todo => todo.id === id);
            if (todo) {
                todo.title = title;
            }
        },
        selectTodosFilter: (state, action: PayloadAction<string>) => {
            state.todosFilter = action.payload;
        },
        setSearchQuery: (state, action: PayloadAction<string>) => {
            state.searchValue = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchUserTodos.pending, (state) => {
                state.todosLoadingStatus = "loading";
            })
            .addCase(fetchUserTodos.fulfilled, (state, action) => {
                state.todos = action.payload;
                state.todosLoadingStatus = "idle";
            })
            .addCase(fetchUserTodos.rejected, (state) => {
                state.todosLoadingStatus = "error";
            })
    }
})

export const todosReducer = userTodosSlice.reducer;

export const {
    addTodo, 
    deleteTodo, 
    makeCompleted, 
    editTodo, 
    selectTodosFilter,
    setSearchQuery
} = userTodosSlice.actions;