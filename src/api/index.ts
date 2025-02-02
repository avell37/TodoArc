import axios from "axios";

const BASE_URL = "https://todoarc.onrender.com";

export const getUsers = async () => {
    try {
        const res = await axios.get(`${BASE_URL}/users`)
        return res.data;
    } catch (err) {
        console.error(err);
    }
}