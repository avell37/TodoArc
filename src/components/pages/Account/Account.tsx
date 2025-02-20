import { useEffect, useState, FC } from "react"
import { getUserByUserID } from "../../../api/todosApi"
import Cookies from 'js-cookie';
import { Header } from "../../organisms/Header"
import { P } from "../../atoms/P"
import { ProfileIcon } from "../../../assets/ProfileIcon"
import { Footer } from "../../organisms/Footer"
import { ITodos } from "../../../models/ITodos"
import { IUser } from "../../../models/IUser"

export const Account: FC = () => {

    const [userData, setUserData] = useState<IUser | null>(null);
    const [completedTodos, setCompletedTodos] = useState('');
    const userID = Cookies.get('userID') ?? "";

    useEffect(() => {
        getUserData(userID);
    }, [userID])

    const getUserData = async (id: string) => {
        const userDataByID = await getUserByUserID(id);
        setUserData(userDataByID);
        const completedTodo = userDataByID.todos.filter((todo: ITodos) => todo.completed === true).length;
        setCompletedTodos(completedTodo);
    }

    return (
        <div className="flex flex-col justify-between min-h-screen h-full">
            <Header />
            <div className="flex justify-center h-[200px] mb-[390px]">
                <div className="max-w-[700px] w-full flex justify-start bg-gray-500 p-[20px] rounded-md min-h-[270px] h-full max-sm:flex-col max-sm: items-center">
                    <ProfileIcon
                        width={200}
                        height={200}
                        className="max-w-[200px] w-full max-sm:h-[100px]" />
                    <div className="flex flex-col mt-[20px] ml-[30px] gap-[20px] max-sm:gap-[10px] w-full">
                        <h1 className="text-white font-bold">Ваш аккаунт</h1>
                        <P className="text-white" text={`Ваше имя: ${userData?.username || ""}`} />
                        <P className="text-white" text={`Ваша почта: ${userData?.email || ""}`} />
                        <P className="text-white" text={`Количество выполненных задач: ${completedTodos || ""}`} />
                        <P className="text-white" text={`Количество задач: ${userData?.todos?.length || ""}`} />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}