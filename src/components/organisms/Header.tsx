import { FC } from "react"
import { logoutUser } from "../../store/reducers/userAuthSlice/userAuthSlice"
import { Link, useNavigate } from "react-router-dom"
import { useAppDispatch } from "../../hooks/useAppDispatch"
import { TodoArcLogo } from "../../assets/TodoArcLogo"
import { ProfileIcon } from "../../assets/ProfileIcon"
import { ClipboardIcon } from "../../assets/ClipboardIcon"
import { ExitIcon } from "../../assets/ExitIcon"
import { Button } from "../atoms/Button"

export const Header: FC = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const logoutAccount = () => {
        dispatch(logoutUser());
        navigate('/')
    }

    return (
        <header className="mb-[250px] w-full">
            <div className='absolute top-0 left-0 w-full h-[210px] bg-[#0D0D0D] max-[300px]:h-[250px]'>
                <div className="w-auto max-w-screen-xl mx-auto p-[10px]">
                    <section className="relative flex justify-between items-center w-full gap-[20px] mt-[30px] mb-[20px] max-sm:gap-[0px] max-[300px]:flex-col max-[300px]:mt-[0px]">
                        <Link to="/todos">
                            <TodoArcLogo
                                className="max-w-[200px] max-h-[100px] w-full h-full mb-[20px]"
                                viewBox="50 150 420 220" />
                        </Link>
                        <nav className="flex gap-[30px] max-md:flex-col max-md:gap-[10px]">
                            <div className="flex gap-[10px] cursor-pointer">
                                <ProfileIcon
                                    width="25px"
                                    height="25px" />
                                <Link to="/account" className="text-white transition duration-200 hover:text-[#cdcdcd] max-[340px]:text-[10px] max-[300px]:text-base">Профиль</Link>
                            </div>
                            <div className="flex gap-[10px] cursor-pointer">
                                <ClipboardIcon
                                    width="25px"
                                    height="25px"
                                    fill="#fff" />
                                <Link to="/todos" className="text-white transition duration-200 hover:text-[#cdcdcd] max-[340px]:text-[10px] max-[300px]:text-base">Ваши цели</Link>
                            </div>
                            <Button
                                onClick={logoutAccount}
                                className="flex gap-[10px] cursor-pointer">
                                <ExitIcon />
                                <div className="text-white transition duration-200 hover:text-[#cdcdcd] max-[340px]:text-[10px] max-[300px]:text-base">Выход</div>
                            </Button>
                        </nav>
                    </section>
                </div>
            </div>
        </header>
    )
}