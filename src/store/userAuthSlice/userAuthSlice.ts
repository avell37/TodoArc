import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { UserAuthState } from "./types";
import { getUsers } from "../../api";

export const fetchUser = createAsyncThunk(
    'users/fetchUsers',
    async () => {
        const res = await getUsers()
        return res.data
    }
)

const initialState: UserAuthState = {
    users: [],
    usersLoadingStatus: "idle",
    isAuth: false
}

const userAuthSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        findUser: (state, action) => {
            state.users.find((user) => user.username === action.payload)
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchUser.pending, (state) => {
                state.usersLoadingStatus = "loading"
            })
            .addCase(fetchUser.fulfilled, (state, action) => {
                state.users.push(action.payload)
                state.usersLoadingStatus = "idle"
            })
            .addCase(fetchUser.rejected, (state) => {
                state.usersLoadingStatus = "error"
            })
    }
})

const { actions, reducer } = userAuthSlice;

export const userReducer = userAuthSlice.reducer;

export const {findUser} = actions;