import { ActiveTodo } from '../../assets/ActiveTodo';
import { CompeletedTodo } from '../../assets/CompeletedTodo';
import { DeleteTodo } from '../../assets/DeleteTodo';

export const Todo = ({title, date, completed}) => {

    return (
        <div className="flex flex-col max-w-[876px] w-full relative flex p-[25px] bg-gray-500 rounded-md gap-[12px] transition duration-300">
            <div className="absolute left-6 cursor-pointer -translate-x-[50%]">
                {completed ? <CompeletedTodo /> : <ActiveTodo />}
            </div>
            <div className='pl-[35px] pr-[100px] max-w-[900px] transition duration-200 text-white'>{title}</div>
            <DeleteTodo />
            <div className='text-white font-extralight absolute bottom-0 right-2'>{date}</div>
        </div>
    )
}