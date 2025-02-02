import { TodoStatistics } from "../molecules/TodoStatistics";
import { Task } from "../atoms/Task"

export const TodoLayout = () => {

    return (
        <div className="w-full flex flex-col justify-center items-center gap-[12px] pb-[70px]">
            <TodoStatistics />
            <Task />
            <Task />
            <Task />
            <Task />
            <Task />
        </div>
    )
};