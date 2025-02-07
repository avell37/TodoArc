import { Header } from "../../organisms/Header"
import { AddTodo } from "../../molecules/AddTodo"
import { TodoLayout } from "../../organisms/TodoLayout"
import { Footer } from "../../organisms/Footer"
import { fetchUser } from "../../../store/userAuthSlice/userAuthSlice"
import { useEffect } from "react"
import { useDispatch } from "react-redux"

export const UserTodos: React.FC = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUser())
    }, [])

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