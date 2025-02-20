import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserAuthState } from "./types";
import { getUsers } from "../../../api/userApi";
import Cookies from "js-cookie";
import { IUser } from "../../../models/IUser";

export const fetchUsers = createAsyncThunk(
    'users/fetchUsers',
    async () => {
        const res = await getUsers();
        return res?.data || [];
    }
)

const initialState: UserAuthState = {
    users: [],
    usersLoadingStatus: "idle",
    isAuth: false,
    authError: false,
}

const userAuthSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        authUser: (state, action: PayloadAction<{ username: string; password: string }>) => {
            const {username, password} = action.payload;
            const foundUser = state.users.find(user => user.username === username && user.password === password);
            if (foundUser) {
                Cookies.set("isAuth", "true");
                Cookies.set("userID", foundUser.id);
                state.isAuth = !!foundUser;
                state.authError = false;
            } else {
                state.authError = true;
            }
        },
        regUser: (state, action: PayloadAction<IUser>) => {
            const {id} = action.payload;
            Cookies.set('isAuth', "true");
            Cookies.set('userID', `${id}`);
            state.users.push(action.payload);
            state.isAuth = true;
        },
        logoutUser: (state) => {
            Cookies.remove('isAuth');
            Cookies.remove('userID');
            state.isAuth = false;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.pending, (state) => {
                state.usersLoadingStatus = "loading";
            })
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.users = action.payload;
                state.usersLoadingStatus = "idle";
            })
            .addCase(fetchUsers.rejected, (state) => {
                state.usersLoadingStatus = "error";
            })
    }
})

export const userReducer = userAuthSlice.reducer;

export const { authUser, regUser, logoutUser } = userAuthSlice.actions;