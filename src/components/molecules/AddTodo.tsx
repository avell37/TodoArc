import { Button } from "../atoms/Button"
import { Input } from "../atoms/Input"

export const AddTodo: React.FC = () => {
    return (
        <div className="relative flex justify-center items-center max-w-[900px] w-full pt-[20px] pb-[50px] gap-[10px]">
            <Input
                name="login"
                type="text"
                placeholder="Введите вашу цель"
                className="max-w-[780px] w-full text-white bg-gray-400 p-[10px] rounded-md transition duration-200 hover:bg-gray-500" />
            <Button
                className="max-w-[130px] bg-darkblue-400 p-[10px] rounded-md text-white transition duration-200 hover:bg-darkblue-500"
                text="Создать" />
        </div>
    )
}