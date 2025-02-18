import { CustomInput } from "../../../features/CustomInput/CustomInput";
import { Button } from "../../atoms/Button"
import { P } from "../../atoms/P"
import { TodoArcLogo } from "../../../assets/TodoArcLogo"
import { Formik } from 'formik';
import { RegValidationSchema } from "../../../features/ValidationSchema/ValidationSchema";
import { Link } from "react-router-dom"
import { nanoid } from "nanoid";
import { useAppSelector } from "../../../hooks/useAppSelector";
import { useAppDispatch } from "../../../hooks/useAppDispatch";
import { createUser } from '../../../api/userApi'
import { regUser } from "../../../store/reducers/userAuthSlice/userAuthSlice";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Cookies from 'js-cookie'

export const Registration: React.FC = () => {

    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const isAuth = useAppSelector((state) => state.userReducer.isAuth || false)

    useEffect(() => {
        const isAuthCookie = Cookies.get("isAuth") === "true";
    
        if (isAuth || isAuthCookie) {
            navigate('/todos');
        }
    }, [isAuth, navigate]);

    return (
        <div className="flex justify-center items-center h-screen">
            <Formik
                initialValues={{
                    email: '',
                    username: '',
                    password: '',
                    repeatPassword: '',
                }}
                validationSchema={RegValidationSchema}
                onSubmit={ async (values, { resetForm }) => {
                    const user = {
                        id: nanoid(),
                        email: values.email,
                        username: values.username,
                        password: values.password,
                        repeatPassword: values.repeatPassword,
                        todos: []
                    }
                        try {
                            await createUser(user)
                            dispatch(regUser(user))
                            resetForm();
                        } catch (err) {
                            console.error(err);
                        }
                }}>
                {({ handleSubmit }) => (
                <form
                onSubmit={handleSubmit}
                className="max-w-[500px] w-full min-h-[600px] flex flex-col justify-center items-center bg-gray-700 gap-[15px] rounded-3xl">
                    <TodoArcLogo
                        className="max-w-[200px] max-h-[100px] w-full h-full mb-[20px] mt-[25px]"
                        viewBox="50 150 420 220" />
                    <h1 className="text-white text-xl font-semibold">Регистрация</h1>
                    <div className="flex flex-col max-h-[500px] max-w-[250px] w-full gap-[13px]">
                        <CustomInput
                            name="email"
                            type="text"
                            placeholder="E-mail"
                            className="text-white bg-gray-500 p-[10px] rounded-md transition duration-200 hover:bg-gray-600"
                        />
                        <CustomInput
                            name="username"
                            type="text"
                            placeholder="Логин"
                            className="text-white bg-gray-500 p-[10px] rounded-md transition duration-200 hover:bg-gray-600"
                        />
                        <CustomInput
                            name="password"
                            type="password"
                            placeholder="Пароль"
                            className="text-white bg-gray-500 p-[10px] rounded-md transition duration-200 hover:bg-gray-600"
                        />
                        <CustomInput
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
                )}
            </Formik>
        </div>
    )
}