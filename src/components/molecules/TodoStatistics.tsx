import { P } from "../atoms/P"
import { useAppSelector } from "../../hooks/useAppSelector"
import { ITodos } from "../../models/ITodos";

export const TodoStatistics: React.FC = () => {

    const userTodos: ITodos[] = useAppSelector((state) => state.todosReducer.todos);
    const completedTodos = userTodos.filter((todo) => todo.completed === true).length;
    const totalTodos = userTodos.length;

    return (
        <div className='max-w-[866px] w-full flex justify-between items-center mb-[25px]'>
            <P text={
                <span className="flex min-w-[200px]">
                    Количество задач <span className="flex items-center justify-center max-w-[25px] w-full h-[25px] bg-gray-400 rounded-[50%] text-white text-[14px] ml-[10px]">{totalTodos}</span>
                </span>
            }
                className="text-blue-400 font-bold" />
            <P text={
                <span className="flex items-center">
                    Выполнено <span className="flex items-center justify-center min-w-[55px] h-[25px] bg-gray-400 rounded-xl text-white text-[14px] ml-[10px]">{completedTodos}/{totalTodos}</span>
                </span>
            }
                className="text-purple-400 font-bold" />
        </div>
    )
}