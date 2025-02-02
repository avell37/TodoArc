import { ActiveTodo } from '../../assets/ActiveTodo';
import { DeleteTodo } from '../../assets/DeleteTodo';

export const Task = () => {

    return (
        <div className="max-w-[876px] w-full relative flex items-center p-[16px] bg-gray-500 rounded-md gap-[12px] transition duration-300">
            <ActiveTodo />
            <div className="text-start ml-[35px] mr-[10px] max-w-[700px] transition duration-200 text-white">This  </div>
            <DeleteTodo />
        </div>
    )
}