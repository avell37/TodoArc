import { Header } from "../../organisms/Header"
import { ProfileIcon } from "../../../assets/ProfileIcon"
import { Footer } from "../../organisms/Footer"

export const Account: React.FC = () => {
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
                        <p className="text-white">Ваше имя: BABA YAGA</p>
                        <p className="text-white">Ваша почта: HOE.BABA.YAGA@gmail.com</p>
                        <p className="text-white">Количество задач: I GOT SIX SIX SIX</p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}