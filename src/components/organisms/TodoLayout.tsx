import { useEffect, FC } from "react";
import Cookies from 'js-cookie';
import { useAppSelector } from "../../hooks/useAppSelector";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { deleteUserTodo, editUserTodo, toggleUserTodoCompleted } from "../../api/todosApi";
import { makeCompleted } from "../../store/reducers/userTodosSlice/userTodosSlice";
import { deleteTodo, editTodo, fetchUserTodos } from "../../store/reducers/userTodosSlice/userTodosSlice";
import { fetchUsers } from "../../store/reducers/userAuthSlice/userAuthSlice";
import { TodoStatistics } from "../molecules/TodoStatistics";
import { Todo } from "../atoms/Todo"
import { Spinner } from "../../assets/Spinner";
import { Clipboard } from "../molecules/Clipboard";
import { P } from "../atoms/P";
import { Error } from "../../assets/Error";
import { ITodos } from "../../models/ITodos";

export const TodoLayout: FC = () => {

    const userID = Cookies.get("userID") ?? "";
    const dispatch = useAppDispatch();
    
    const userTodos = useAppSelector((state) => state.todosReducer.todos);
    const todosLoadingStatus = useAppSelector((state) => state.todosReducer.todosLoadingStatus);
    const todoFilter = useAppSelector((state) => state.todosReducer.todosFilter);
    const searchValue = useAppSelector((state) => state.todosReducer.searchValue);

    useEffect(() => {
        dispatch(fetchUserTodos(userID))
        dispatch(fetchUsers());
    }, [dispatch, userID]);

    const handleDelete = (id: string) => {
        try {
            deleteUserTodo(userID, id);
            dispatch(deleteTodo(id));
        } catch(err) {
            console.error(err);
        }
    }

    const handleToggle = async (id: string) => {
        try {
            const todo = userTodos.find(todo => todo.id === id);
            if (todo) {
                await toggleUserTodoCompleted(userID, id);
                dispatch(makeCompleted(id));
            }
        } catch (err) {
            console.error(err);
        }
    }

    const handleEdit = async (id: string, newTitle: string) => {
        try {
            const todo = userTodos.find(todo => todo.id === id);
            if (todo) {
                const updatedTodo: ITodos = { ...todo, title: newTitle ?? ""};
                await editUserTodo(userID, updatedTodo);
                dispatch(editTodo({ id, title: newTitle }))
            }
        } catch (err) {
            console.error(err);
        }
    }

    const searchAndFilterTodos = (filter: string, searchQuery: string, todos: ITodos[]): ITodos[] => {
        let filteredTodos = todos;

        if (searchQuery) {
            filteredTodos = filteredTodos.filter(todo => todo.title?.toLowerCase().includes(searchQuery.toLowerCase()));
        }

        switch (filter) {
            case "completed":
                return filteredTodos.filter(todo => todo.completed);
            case "title":
                return [...filteredTodos].sort((a, b) => (a.title ?? "").localeCompare(b.title ?? ""));
            case "date":
                return [...filteredTodos].sort((a, b) => new Date(a.date ?? "").getTime() - new Date(b.date ?? "").getTime());
            default:
                return filteredTodos;
        }
    }

    const renderTodos = (todos: ITodos[]) => {
        if (!todos.length) return <Clipboard />;

        return todos.map((todo) => {
            return (
                <Todo
                    key={todo.id} 
                    {...todo}
                    onDelete={() => handleDelete(todo.id)}
                    onToggle={() => handleToggle(todo.id)}
                    onEdit={handleEdit}
                />
            )
        })
    }

    if (todosLoadingStatus === 'loading') {
        return <Spinner />
    }

    if (todosLoadingStatus === 'error') {
        return (
            <div className="flex flex-col justify-center items-center text-center gap-[20px] max-w-[210px]">
                <Error />
                <P className="text-white" text="Что-то пошло не так... Перезагрузи страницу :)" />
            </div>
        )
    }

    const filteredTodos = searchAndFilterTodos(todoFilter, searchValue, userTodos);
    const todoElements = renderTodos(filteredTodos);

    return (
        <div className="w-full flex flex-col justify-center items-center gap-[12px] pb-[70px]">
            <TodoStatistics />
            {todoElements}
        </div>
    )
};