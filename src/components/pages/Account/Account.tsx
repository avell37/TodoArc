import { Header } from "../../organisms/Header"
import { ProfileIcon } from "../../../assets/ProfileIcon"
import { Footer } from "../../organisms/Footer"
import { useEffect, useState } from "react"
import { getUserByUserID } from "../../../api/todosApi"
import Cookies from 'js-cookie';
import { ITodos } from "../../../models/ITodos"
import { IUser } from "../../../models/IUser"

export const Account: React.FC = () => {

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
                <div className="max-w-[700px] w-full flex justify-start bg-gray-500 p-[20px] rounded-md min-h-[270px] h-full">
                    <ProfileIcon
                        width={200}
                        height={200}
                        className="max-w-[200px] w-full" />
                    <div className="flex flex-col mt-[20px] ml-[30px] gap-[20px] w-full">
                        <h1 className="text-white font-bold">Ваш аккаунт</h1>
                        <p className="text-white">Ваше имя: {userData?.username}</p>
                        <p className="text-white">Ваша почта: {userData?.email}</p>
                        <p className="text-white">Количество выполненных задач: {completedTodos}</p>
                        <p className="text-white">Количество задач: {userData?.todos?.length}</p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}