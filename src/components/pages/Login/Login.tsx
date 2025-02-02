import { MyInput } from "../../../features/MyInput"
import { Button } from "../../atoms/Button"
import { P } from "../../atoms/P"
import { TodoArcLogo } from "../../../assets/TodoArcLogo"
import { Formik } from "formik"
import { LoginValidationSchema } from "../../../features/LoginValidationSchema"
import { Link } from "react-router-dom"

export const Login: React.FC = () => {
    return (
        <Formik
            initialValues={{
                nickname: '',
                password: ''
            }}
            validationSchema={LoginValidationSchema}
            onSubmit={values => console.log(JSON.stringify(values, null, 2))}>
            <div className="flex justify-center items-center h-screen">
                <form className="max-w-[500px] w-full min-h-[500px] flex flex-col justify-center items-center bg-gray-700 gap-[15px] rounded-3xl">
                    <TodoArcLogo
                        className="max-w-[200px] max-h-[100px] w-full h-full mb-[20px] mt-[20px]"
                        viewBox="50 150 420 220" />
                    <h1 className="text-white text-xl font-semibold mt-[10px]">Вход</h1>
                    <div className="relative flex flex-col gap-[13px] max-h-[250px] h-full">
                        <MyInput
                            name="nickname"
                            type="text"
                            placeholder="Логин"
                            className="text-white bg-gray-500 p-[10px] rounded-md transition duration-200 hover:bg-gray-600"
                        />
                        <MyInput
                            name="password"
                            type="password"
                            placeholder="Пароль"
                            className="text-white bg-gray-500 p-[10px] rounded-md transition duration-200 hover:bg-gray-600"
                        />
                        <Button
                            text='Войти'
                            className="bg-darkblue-400 max-w-[243px] w-full h-[40px] rounded-3xl text-white font-semibold transition duration-200 hover:bg-darkblue-500"
                        />
                    </div>
                    <Link to="/signin">
                        <P
                            text="У вас нет аккаунта? Зарегистрируйтесь!"
                            className="text-white max-w-[300px] text-center mb-[20px] transition duration-200 hover:text-[#cdcdcd]" />
                    </Link>
                </form>
            </div>
        </Formik>
    )
}