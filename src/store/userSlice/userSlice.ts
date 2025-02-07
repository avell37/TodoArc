import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { UserAuthState } from "./types";
import { getUsers } from "../../api";

export const fetchUser = createAsyncThunk(
    'users/fetchUsers',
    async () => {
        const res = await getUsers()
        if (res?.data) {
            return res.data;
        }
        return [];
    }
)

const initialState: UserAuthState = {
    users: [],
    usersLoadingStatus: "idle"
}

const userAuthSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {

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

export const userReducer = userAuthSlice.reducer;