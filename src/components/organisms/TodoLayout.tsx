import { TodoStatistics } from "../molecules/TodoStatistics";
import { Todo } from "../atoms/Todo"
import { fetchUserTodos } from "../../store/reducers/userTodosSlice/userTodosSlice";
import Cookies from 'js-cookie';
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { fetchUser } from "../../store/reducers/userAuthSlice/userAuthSlice";
import { Spinner } from "../../assets/Spinner";
import { Clipboard } from "../molecules/Clipboard";
import { P } from "../atoms/P";
import { Error } from "../../assets/Error";

export const TodoLayout = () => {

    const dispatch = useAppDispatch();
    const userTodos = useSelector((state) => state.todosReducer.todos);
    const todosLoadingStatus = useSelector((state) => state.todosReducer.todosLoadingStatus)

    useEffect(() => {
        const fetchTodos = async () => {
            try {
                dispatch(fetchUserTodos(Cookies.get("userID")))
                dispatch(fetchUser());
            } catch (err) {
                console.error(err);
            }
        }

        fetchTodos();
    }, [dispatch])

    if (todosLoadingStatus === 'loading') {
        return <Spinner />
    } else if (todosLoadingStatus === 'error') {
        return (
            <div className="flex flex-col justify-center items-center text-center gap-[20px] max-w-[210px]">
                <Error />
                <P className="text-white" text="Что-то пошло не так... Перезагрузи страницу :)" />
            </div>
        )
    }

    const renderTodos = (arr) => {
        if (arr.length === 0) {
            return <Clipboard />
        }

        return arr.map((todo) => {
            return (
                <Todo key={todo.id} {...todo} />
            )
        })
    }
    const elements = renderTodos(userTodos);

    return (
        <div className="w-full flex flex-col justify-center items-center gap-[12px] pb-[70px]">
            <TodoStatistics />
            {elements}
        </div>
    )
};