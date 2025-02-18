import { ActiveTodo } from '../../assets/ActiveTodo';
import { CompeletedTodo } from '../../assets/CompeletedTodo';
import { DeleteTodo } from '../../assets/DeleteTodo';
import { EditTodo } from '../../assets/EditTodo';

interface TodoPrors {
    id: string,
    title: string,
    date: string,
    completed: boolean,
    onDelete: (id: string | undefined) => void,
    onToggle: (id: string | undefined) => void,
}

export const Todo: React.FC<TodoPrors> = ({id, title, date, completed, onDelete, onToggle}) => {

    return (
        <div className="flex flex-col max-w-[876px] w-full relative flex p-[25px] bg-gray-500 rounded-md gap-[12px] transition duration-300">
            {completed ?
            <>
                <div 
                onClick={() => onToggle(id)}
                className="absolute left-6 cursor-pointer -translate-x-[50%]">
                    <CompeletedTodo />
                </div>
                <div className='line-through pl-[25px] pr-[100px] max-w-[900px] transition duration-200 text-gray-300'>{title}</div>
            </> 
            :
            <>
                <div 
                onClick={() => onToggle(id)}
                className="absolute left-6 cursor-pointer -translate-x-[50%]">
                    <ActiveTodo />
                </div>
                <div className='pl-[25px] pr-[100px] max-w-[900px] transition duration-200 text-white'>{title}</div>
            </>}
            <button>
                <EditTodo />
            </button>
            <button onClick={() => onDelete(id)}>
                <DeleteTodo />
            </button>
            <div className='text-white font-extralight absolute bottom-0 right-2'>{date}</div>
        </div>
    )
}