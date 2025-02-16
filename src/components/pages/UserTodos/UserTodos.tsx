import { Header } from "../../organisms/Header"
import { AddTodo } from "../../molecules/AddTodo"
import { TodoLayout } from "../../organisms/TodoLayout"
import { Footer } from "../../organisms/Footer"

export const UserTodos: React.FC = () => {   

    return (
        <div className="relative flex flex-col min-h-screen">
            <Header />
            <div className="flex flex-1 flex-col justify-start items-center">
                <AddTodo />
                <TodoLayout />
            </div>
            <Footer />
        </div>
    )
}