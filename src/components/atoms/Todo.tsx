import { useState, FC } from 'react';
import { ActiveTodo } from '../../assets/ActiveTodo';
import { CompeletedTodo } from '../../assets/CompeletedTodo';
import { DeleteTodo } from '../../assets/DeleteTodo';
import { EditTodo } from '../../assets/EditTodo';
import { Input } from './Input';
import { Button } from './Button';
import { DoneIcon } from '../../assets/DoneIcon';

interface TodoProps {
    id: string,
    title: string,
    date?: string,
    completed?: boolean,
    onDelete: (id: string | undefined) => void,
    onToggle: (id: string) => void,
    onBlur?: () => void,
    onEdit: (id: string, newTitle: string) => void,
}

export const Todo: FC<TodoProps> = ({id, title, date, completed, onDelete, onToggle, onEdit}) => {

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
                    <form 
                    className='flex items-center gap-[10px] max-w-[500px] max-[620px]:max-w-[400px] max-[500px]:max-w-[300px] max-[400px]:max-w-[200px] max-[300px]:max-w-[100px]'
                    onSubmit={handleSave}>
                        <Input
                        type="text"
                        value={editedTitle}
                        onChange={(e) => setEditedTitle(e.target.value)}
                        autoFocus
                        className='max-w-[480px] w-full text-white border-solid border-2 border-gray-300 p-[10px] ml-[20px] rounded-md transition duration-200 hover:border-gray-200' />
                        <Button className='w-[25px] h-[25px] flex justify-center items-center text-white bg-gray-400 rounded-md hover:bg-gray-300 transition duration-200'>
                            <DoneIcon />
                        </Button>
                    </form>
                ) : (
                    <div className='line-through pl-[25px] pr-[100px] max-w-[900px] w-full transition duration-200 text-gray-300 break-all'>{title}</div>
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
                    <form 
                    className='flex items-center gap-[10px] max-w-[500px] max-[620px]:max-w-[400px] max-[500px]:max-w-[300px] max-[400px]:max-w-[200px] max-[300px]:max-w-[100px]'
                    onSubmit={handleSave}>
                        <Input
                        type="text"
                        value={editedTitle}
                        onChange={(e) => setEditedTitle(e.target.value)}
                        autoFocus
                        className='max-w-[480px] w-full text-white border-solid border-2 border-gray-300 p-[10px] ml-[20px] rounded-md transition duration-200 hover:border-gray-200' />
                        <Button className='w-[25px] h-[25px] flex justify-center items-center text-white bg-gray-400 rounded-md hover:bg-gray-300 transition duration-200'>
                            <DoneIcon />
                        </Button>
                    </form>
                ) : (
                    <div className='pl-[25px] pr-[100px] max-w-[900px] w-full transition duration-200 text-white break-all'>{title}</div>
                )}
            </>}
            <Button onClick={handleEdit}>
                <EditTodo />
            </Button>
            <Button onClick={() => onDelete(id)}>
                <DeleteTodo />
            </Button>
            <div className='text-white font-extralight absolute bottom-0 right-2'>{date}</div>
        </div>
    )
}