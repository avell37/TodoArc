import { TodoStatistics } from "../molecules/TodoStatistics";
import { Todo } from "../atoms/Todo"
import { fetchUserTodos } from "../../store/reducers/userTodosSlice/userTodosSlice";
import Cookies from 'js-cookie';
import { useEffect } from "react";
import { useAppSelector } from "../../hooks/useAppSelector";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { fetchUsers } from "../../store/reducers/userAuthSlice/userAuthSlice";
import { Spinner } from "../../assets/Spinner";
import { Clipboard } from "../molecules/Clipboard";
import { P } from "../atoms/P";
import { Error } from "../../assets/Error";
import { deleteTodo } from "../../store/reducers/userTodosSlice/userTodosSlice";
import { deleteUserTodo, toggleUserTodoCompleted } from "../../api/todosApi";
import { makeCompleted } from "../../store/reducers/userTodosSlice/userTodosSlice";
import { ITodos } from "../../models/ITodos";

export const TodoLayout = () => {

    const userID = Cookies.get("userID") ?? "";
    const dispatch = useAppDispatch();
    const userTodos: ITodos[] = useAppSelector((state) => state.todosReducer.todos);
    const todosLoadingStatus = useAppSelector((state) => state.todosReducer.todosLoadingStatus)

    useEffect(() => {
        const fetchTodos = async () => {
            try {
                dispatch(fetchUserTodos(userID))
                dispatch(fetchUsers());
            } catch (err) {
                console.error(err);
            }
        }

        fetchTodos();
    }, [dispatch, userID])

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

    const onDelete = (id: string) => {
        try {
            deleteUserTodo(userID, id);
            dispatch(deleteTodo(id));
        } catch(err) {
            console.error(err);
        }
    }

    const onToggle = async (id: string) => {
        try {
            dispatch(makeCompleted(id));
            const todo = userTodos.find((todo: ITodos) => todo.id === id);
            if (todo) {
                await toggleUserTodoCompleted(userID, id);
            }
        } catch (err) {
            console.error(err);
            dispatch(makeCompleted(id));
        }
    }

    const onEdit = async () => {
        try {

        } catch (err) {
            console.error(err);
        }
    }

    const renderTodos = (arr: ITodos[]) => {
        if (arr.length === 0) {
            return <Clipboard />
        }

        return arr.map((todo: ITodos) => {
            return (
                <Todo key={todo.id} {...todo} 
                onDelete={() => onDelete(todo.id)} 
                onToggle={() => onToggle(todo.id)}
                />
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