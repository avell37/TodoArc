import { TodoArcLogo } from "../../assets/TodoArcLogo"
import { ProfileIcon } from "../../assets/ProfileIcon"
import { ClipboardIcon } from "../../assets/ClipboardIcon"
import { ExitIcon } from "../../assets/ExitIcon"
import { Link } from "react-router-dom"

export const Header: React.FC = () => {
    return (
        <div className="mb-[250px] w-full">
            <div className='absolute top-0 left-0 w-full h-[210px] bg-[#0D0D0D]'>
                <div className="w-auto max-w-screen-xl mx-auto p-[10px]">
                    <section className="relative flex justify-between items-center w-full gap-[20px] mt-[30px] mb-[20px]">
                        <Link to="/todos">
                            <TodoArcLogo
                                className="max-w-[200px] max-h-[100px] w-full h-full mb-[20px]"
                                viewBox="50 150 420 220" />
                        </Link>
                        <div className="flex gap-[30px] max-md:flex-col max-md:gap-[10px]">
                            <div className="flex gap-[10px] cursor-pointer">
                                <ProfileIcon
                                    width={25}
                                    height={25} />
                                <Link to="/account" className="text-white max-sm:test-xs transition duration-200 hover:text-[#cdcdcd]">Профиль</Link>
                            </div>
                            <div className="flex gap-[10px] cursor-pointer">
                                <ClipboardIcon
                                    width={25}
                                    height={25}
                                    fill="#fff" />
                                <Link to="/todos" className="text-white max-sm:test-xs transition duration-200 hover:text-[#cdcdcd]">Ваши цели</Link>
                            </div>
                            <div className="flex gap-[10px] cursor-pointer">
                                <ExitIcon />
                                <div className="text-white max-sm:test-xs transition duration-200 hover:text-[#cdcdcd]">Выход</div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div >
    )
}