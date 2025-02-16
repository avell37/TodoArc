import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { UserAuthState } from "./types";
import { getUsers } from "../../../api/userApi";
import Cookies from "js-cookie";

export const fetchUser = createAsyncThunk(
    'users',
    async () => {
        const res = await getUsers()
        if (res?.data) {
            return res.data
        }
        return [];
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
        authUser: (state, action) => {
            const {username, password} = action.payload;
            const foundUser = state.users.find((user) => user.username === username && user.password === password)
            if (foundUser) {
                Cookies.set("isAuth", true)
                Cookies.set("userID", foundUser.id)
                state.isAuth = !!foundUser;
            }
        },
        regUser: (state, action) => {
            const {id} = action.payload;
            Cookies.set('isAuth', true);
            Cookies.set('userID', `${id}`);
            state.users.push(action.payload)
            state.isAuth = true;
        },
        logoutUser: (state) => {
            Cookies.set('isAuth', false);
            state.isAuth = false;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchUser.pending, (state) => {
                state.usersLoadingStatus = "loading"
            })
            .addCase(fetchUser.fulfilled, (state, action) => {
                state.users = action.payload;
                state.usersLoadingStatus = "idle"
            })
            .addCase(fetchUser.rejected, (state) => {
                state.usersLoadingStatus = "error"
            })
    }
})

export const userReducer = userAuthSlice.reducer;

export const {authUser, regUser, logoutUser} = userAuthSlice.actions;