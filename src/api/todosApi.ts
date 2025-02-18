import axios from "axios"
import { BASE_API_URL } from "./baseUrl"
import { IUser } from "../models/IUser";
import { ITodos } from "../models/ITodos";

export const getUserByUserID = async (userID: string) => {
    try {
        const res = await axios.get(`${BASE_API_URL}/users/${userID}`);
        return res.data;
    } catch (err) {
        console.error(err);
    }
}

export const updateUser = async (userID: string, updatedUser: IUser) => {
    try {
        const res = await axios.put(`${BASE_API_URL}/users/${userID}`, updatedUser)
        return res.data;    
    } catch (err) {
        console.error(err)
    }
}

export const addUserTodo = async (userID: string, todo: ITodos) => {
    try {
        const user = await getUserByUserID(userID);
        user.todos.push(todo);
        await updateUser(userID, user)
    } catch (err) {
        console.error(err);
    }
}

export const deleteUserTodo = async (userID: string, todoID: string) => {
    try {
        const user = await getUserByUserID(userID);
        user.todos = user.todos.filter((todo: ITodos) => todo.id !== todoID)
        await updateUser(userID, user);
    } catch (err) {
        console.error(err);
    }
}

export const toggleUserTodoCompleted = async (userID: string, todoID: string) => {
    try {
        const user = await getUserByUserID(userID);
        user.todos = user.todos.map((todo: ITodos) => 
            todo.id === todoID ? { ...todo, completed: !todo.completed } : todo
        )
        await updateUser(userID, user);
    } catch (err) {
        console.error(err);
    }
}

export const editUserTodo = async (userID: string, updatedTodo: ITodos) => {
    try {
        const user = await getUserByUserID(userID);
        user.todos = user.todos.map((todo: ITodos) => todo.id === updatedTodo.id ? updatedTodo : todo);
        await updateUser(userID, user)
    } catch (err) {
        console.error(err);
    }
}