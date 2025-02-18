import { Button } from "../atoms/Button"
import { Input } from "../atoms/Input"
import { useState } from "react";
import { nanoid } from "nanoid";
import { FormateDate } from "../../features/FormateDate/FormateDate";
import { addTodo } from "../../store/reducers/userTodosSlice/userTodosSlice";
import { useAppDispatch } from "../../hooks/useAppDispatch";

export const AddTodo: React.FC = () => {

    const [value, setValue] = useState('');
    const dispatch = useAppDispatch();

    const createTodo = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const newTodo = {
            id: nanoid(),
            title: value,
            date: FormateDate(new Date()),
            completed: false
        }

        dispatch(addTodo(newTodo))
        setValue('');
    };

    return (
        <form
        onSubmit={(e) => createTodo(e)}
        className="relative flex justify-center items-center max-w-[900px] w-full pt-[20px] pb-[50px] gap-[10px]">
            <Input
                name="login"
                type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder="Введите вашу цель"
                className="max-w-[780px] w-full text-white bg-gray-400 p-[10px] rounded-md transition duration-200 hover:bg-gray-500" />
            <Button
                className="max-w-[130px] bg-darkblue-400 p-[10px] rounded-md text-white transition duration-200 hover:bg-darkblue-500"
                text="Создать" />
        </form>
    )
}