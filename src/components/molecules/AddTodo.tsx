import { useState, FC } from "react";
import { nanoid } from "nanoid";
import { addTodo } from "../../store/reducers/userTodosSlice/userTodosSlice";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { FormateDate } from "../../features/FormateDate/FormateDate";
import { Button } from "../atoms/Button"
import { Input } from "../atoms/Input"

export const AddTodo: FC = () => {

    const [value, setValue] = useState('');
    const dispatch = useAppDispatch();

    const createTodo = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (value.length <= 0) return;

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
            className="relative flex justify-center items-center max-w-[900px] w-full pt-[20px] pb-[50px] gap-[10px] max-[300px]:flex-col">
            <Input
                name="login"
                type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder="Введите вашу цель"
                className="max-w-[700px] w-full text-white bg-gray-400 p-[10px] rounded-md transition duration-200 hover:bg-gray-500 max-[300px]:max-w-[165px]" />
            <Button
                className="max-w-[165px] w-full bg-darkblue-400 p-[10px] rounded-md text-white transition duration-200 hover:bg-darkblue-500"
                children="Создать" />
        </form>
    )
}