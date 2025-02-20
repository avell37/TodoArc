import { useEffect, useState, FC } from "react";
import Cookies from 'js-cookie'
import { Formik } from 'formik';
import { nanoid } from "nanoid";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../../hooks/useAppSelector";
import { useAppDispatch } from "../../../hooks/useAppDispatch";
import { createUser, getUsers } from '../../../api/userApi'
import { regUser } from "../../../store/reducers/userAuthSlice/userAuthSlice";
import { Link } from "react-router-dom"
import { RegValidationSchema } from "../../../features/ValidationSchema/ValidationSchema";
import { CustomInput } from "../../../features/CustomInput/CustomInput";
import { Button } from "../../atoms/Button"
import { P } from "../../atoms/P"
import { TodoArcLogo } from "../../../assets/TodoArcLogo"
import { IUser } from "../../../models/IUser";

export const Registration: FC = () => {

    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const isAuth = useAppSelector((state) => state.userReducer.isAuth || false)
    const [error, setError] = useState("");

    useEffect(() => {
        const isAuthCookie = Cookies.get("isAuth") === "true";
    
        if (isAuth && isAuthCookie) {
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
                            const res = await getUsers();
                            const users: IUser[] = res?.data;
                            const isUsernameTaken = users.some(user => user.username === values.username);
                            const isEmailTaken = users.some(user => user.email === values.email)
                            if (isUsernameTaken || isEmailTaken) {
                                setError(isUsernameTaken ? "Этот логин уже занят" : "Эта почта уже занята")
                            } else {
                                await createUser(user)
                                setError("");
                                dispatch(regUser(user))
                                resetForm();
                            }
                        } catch (err) {
                            console.error(err);
                            setError("Ошибка. Попробуйте еще раз!")
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
                        {error && <P text={error} className="text-red-500 text-center"/>}
                        <Button
                            type='submit'
                            children='Зарегистрироваться'
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