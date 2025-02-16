import axios from "axios"
import { BASE_API_URL } from "./baseUrl"

export const getTodosByUserID = async (userID) => {
    try {
        const res = await axios.get(`${BASE_API_URL}/users/${userID}`);
        return res.data;
    } catch (err) {
        console.error(err);
    }
}

export const updateUserTodos = async (userID, updatedUser) => {
    try {
        const res = await axios.put(`${BASE_API_URL}/users/${userID}`, updatedUser)
        return res.data;    
    } catch (err) {
        console.error(err)
    }
}

export const addUserTodo = async (userID, todo) => {
    try {
        const user = await getTodosByUserID(userID);
        user.todos.push(todo);
        await updateUserTodos(userID, user)
    } catch (err) {
        console.error(err);
    }
}

export const deleteUserTodo = async (userID, todoID) => {
    try {
        const user = await getTodosByUserID(userID);
    } catch (err) {
        console.error(err);
    }
}