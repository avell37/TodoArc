import { FC } from "react"
import { Link } from "react-router-dom"
import { TodoArcLogo } from "../../../assets/TodoArcLogo"
import { Button } from "../../atoms/Button"
import { P } from "../../atoms/P"

export const WelcomePage: FC = () => {
    return (
        <div className="flex flex-col justify-center items-center h-screen bg-[#0D0D0D]">
            <TodoArcLogo
                className="max-h-[220px] max-w-[400px] w-full h-full mt-[25px]"
                viewBox="50 150 420 220" />
            <div className="flex flex-col justify-center items-center">
                <P
                    text="Этот сайт был сделан для того, чтобы вы записывали свои цели и достигали их вместе с нами."
                    className="text-white max-w-[400px] text-center m-[10px] text-[14px]" />
                <P
                    text="Ну что, начнём?"
                    className="text-white font-bold mt-[20px] mb-[10px] text-[18px]" />
            </div>
            <div className="flex max-w-[400px] w-full gap-[20px]">
                <Link to="/signin" className="max-w-[243px] w-full">
                    <Button
                        children='Регистрация'
                        className="bg-darkblue-400 w-full h-[40px] rounded-md text-white font-semibold transition duration-200 hover:bg-darkblue-500" />
                </Link>
                <Link to="/login" className="max-w-[243px] w-full">
                    <Button
                        children='Войти'
                        className="bg-darkpurple-400 w-full h-[40px] rounded-md text-white font-semibold transition duration-200 hover:bg-darkpurple-500" />
                </Link>
            </div>
        </div>
    )
}