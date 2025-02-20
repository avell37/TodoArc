import { FC } from "react"
import { Header } from "../../organisms/Header"
import { AddTodo } from "../../molecules/AddTodo"
import { TodoLayout } from "../../organisms/TodoLayout"
import { Footer } from "../../organisms/Footer"
import { SearchTodo } from "../../molecules/SearchTodo"

export const UserTodos: FC = () => {
    return (
        <div className="relative flex flex-col min-h-screen">
            <Header />
            <div className="flex flex-1 flex-col justify-start items-center">
                <SearchTodo />
                <AddTodo />
                <TodoLayout />
            </div>
            <Footer />
        </div>
    )
}