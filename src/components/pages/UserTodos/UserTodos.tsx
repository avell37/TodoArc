import { Header } from "../../organisms/Header"
import { AddTodo } from "../../molecules/AddTodo"
import { TodoLayout } from "../../organisms/TodoLayout"
import { getUsers } from "../../../api"
import { useCallback } from "react"
import { Footer } from "../../organisms/Footer"

export const UserTodos: React.FC = () => {

    const fetchUsers = useCallback(async () => {
        try {
            const response = await getUsers();
            console.log(response)
        } catch (err) {
            console.error(err);
        }
    }, [])

    fetchUsers();

    return (
        <div className="flex flex-col justify-between h-screen">
            <Header />
            <div className="flex flex-col justify-center items-center">
                <AddTodo />
                <TodoLayout />
            </div>
            <Footer />
        </div>
    )
}