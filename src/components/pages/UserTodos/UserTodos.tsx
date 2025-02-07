import { Header } from "../../organisms/Header"
import { AddTodo } from "../../molecules/AddTodo"
import { TodoLayout } from "../../organisms/TodoLayout"
import { Footer } from "../../organisms/Footer"

export const UserTodos: React.FC = () => {

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