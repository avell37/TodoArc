import { ActiveTodo } from '../../assets/ActiveTodo';
import { CompeletedTodo } from '../../assets/CompeletedTodo';
import { DeleteTodo } from '../../assets/DeleteTodo';
import { EditTodo } from '../../assets/EditTodo';
import { Input } from './Input';
import { useState } from 'react';
import { Button } from './Button';

interface TodoProps {
    id: string,
    title: string,
    date: string,
    completed: boolean,
    onDelete: (id: string | undefined) => void,
    onToggle: (id: string) => void,
    onBlur?: () => void,
    onEdit?: (id: string, newTitle: string) => void,
}

export const Todo: React.FC<TodoProps> = ({id, title, date, completed, onDelete, onToggle, onEdit}) => {

    const [isEditing, setIsEditing] = useState(false);
    const [editedTitle, setEditedTitle] = useState(title);

    const handleEdit = () => {
        setIsEditing(true);
    }

    const handleSave = () => {
        onEdit(id, editedTitle)
        setIsEditing(false);
    }

    return (
        <div className="flex flex-col max-w-[876px] w-full relative flex p-[30px] bg-gray-500 rounded-md transition duration-300">
            {completed ?
            <>
                <div 
                onClick={() => onToggle(id)}
                className="absolute left-6 cursor-pointer -translate-x-[50%]">
                    <CompeletedTodo />
                </div>
                {isEditing ? (
                    <form onSubmit={handleSave}>
                        <Input
                        type="text"
                        value={editedTitle}
                        onChange={(e) => setEditedTitle(e.target.value)}
                        autoFocus
                        className='max-w-[480px] w-full text-white border-solid border-2 border-gray-300 p-[10px] ml-[20px] rounded-md transition duration-200 hover:border-gray-200' />
                    </form>
                ) : (
                    <div className='line-through pl-[25px] pr-[100px] max-w-[900px] transition duration-200 text-gray-300'>{title}</div>
                )}
            </> 
            :
            <>
                <div 
                onClick={() => onToggle(id)}
                className="absolute left-6 cursor-pointer -translate-x-[50%]">
                    <ActiveTodo />
                </div>
                {isEditing ? (
                    <form onSubmit={handleSave}>
                        <Input
                        type="text"
                        value={editedTitle}
                        onChange={(e) => setEditedTitle(e.target.value)}
                        autoFocus
                        className='max-w-[480px] w-full text-white border-solid border-2 border-gray-300 p-[10px] ml-[20px] rounded-md transition duration-200 hover:border-gray-200' />
                    </form>
                ) : (
                    <div className='pl-[25px] pr-[100px] max-w-[900px] transition duration-200 text-white'>{title}</div>
                )}
            </>}
            <button onClick={handleEdit}>
                <EditTodo />
            </button>
            <button onClick={() => onDelete(id)}>
                <DeleteTodo />
            </button>
            <div className='text-white font-extralight absolute bottom-0 right-2'>{date}</div>
        </div>
    )
}