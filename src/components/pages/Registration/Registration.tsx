import { MyInput } from "../../../features/MyInput";
import { Button } from "../../atoms/Button"
import { P } from "../../atoms/P"
import { TodoArcLogo } from "../../../assets/TodoArcLogo"
import { Formik } from 'formik';
import { RegValidationSchema } from '../../../features/RegValidationSchema';
import { Link } from "react-router-dom"

export const Registration: React.FC = () => {
    return (
        <div className="flex justify-center items-center h-screen">
            <Formik
                initialValues={{
                    email: '',
                    nickname: '',
                    password: '',
                    repeatPassword: '',
                }}
                validationSchema={RegValidationSchema}
                onSubmit={values => console.log(JSON.stringify(values, null, 2))}>
                <form className="max-w-[500px] w-full min-h-[600px] flex flex-col justify-center items-center bg-gray-700 gap-[15px] rounded-3xl">
                    <TodoArcLogo
                        className="max-w-[200px] max-h-[100px] w-full h-full mb-[20px] mt-[25px]"
                        viewBox="50 150 420 220" />
                    <h1 className="text-white text-xl font-semibold">Регистрация</h1>
                    <div className="flex flex-col max-h-[500px] max-w-[250px] w-full gap-[13px]">
                        <MyInput
                            name="email"
                            type="text"
                            placeholder="E-mail"
                            className="text-white bg-gray-500 p-[10px] rounded-md transition duration-200 hover:bg-gray-600"
                        />
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
                        <MyInput
                            name="repeatPassword"
                            type="password"
                            placeholder="Повторите пароль"
                            className="text-white bg-gray-500 p-[10px] rounded-md transition duration-200 hover:bg-gray-600"
                        />
                        <Button
                            type='submit'
                            text='Зарегистрироваться'
                            className="bg-darkblue-400 max-w-[243px] w-full h-[40px] rounded-3xl text-white font-semibold transition duration-200 hover:bg-darkblue-500"
                        />
                    </div>
                    <Link to="/login" className="text-center">
                        <P
                            text="Уже есть аккаунт? Войти"
                            className="max-w-[200px] text-white mb-[25px] transition duration-200 hover:text-[#cdcdcd]"
                        />
                    </Link>
                </form>
            </Formik>
        </div>
    )
}