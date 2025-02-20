import axios from "axios";
import { BASE_API_URL } from "./baseUrl";
import { IUser } from "../models/IUser";

export const getUsers = async () => {
    try {
        const res = await axios.get(`${BASE_API_URL}/users`)
        return res;
    } catch (err) {
        console.error(err);
    }
}

export const createUser = async (user: IUser) => {
    try {
        const res = await axios.post(`${BASE_API_URL}/users`, user);
        return res.data;
    } catch (err) {
        console.error(err);
    }
}