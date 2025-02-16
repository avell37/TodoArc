import { CustomInput } from "../../../features/CustomInput/CustomInput"
import { Button } from "../../atoms/Button"
import { P } from "../../atoms/P"
import { TodoArcLogo } from "../../../assets/TodoArcLogo"
import { Formik, Form } from "formik"
import { LoginValidationSchema } from "../../../features/ValidationSchema/ValidationSchema"
import { Link, useNavigate } from "react-router-dom"
import { authUser, fetchUser } from "../../../store/reducers/userAuthSlice/userAuthSlice"
import { useSelector } from "react-redux"
import { useEffect } from "react"
import Cookies from 'js-cookie'
import { useAppDispatch } from "../../../hooks/useAppDispatch"

export const Login: React.FC = () => {

    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const isAuth = useSelector((state) => state.userReducer.isAuth || false)

    useEffect(() => {
        dispatch(fetchUser());
    }, [dispatch]);
    
    useEffect(() => {
        const isAuthCookie = Cookies.get("isAuth") === "true";
    
        if (isAuth || isAuthCookie) {
            navigate('/todos');
        }
    }, [isAuth, navigate]);

    return (
        <Formik
            initialValues={{
                username: '',
                password: ''
            }}
            validationSchema={LoginValidationSchema}
            onSubmit={(values, { resetForm }) => {
                const user = {
                    username: values.username,
                    password: values.password
                }
                dispatch(authUser(user))
                resetForm()
            }}>
            {({ handleSubmit }) => (
                <div className="flex justify-center items-center h-screen">
                    <Form
                        onSubmit={handleSubmit}
                        className="max-w-[500px] w-full min-h-[500px] flex flex-col justify-center items-center bg-gray-700 gap-[15px] rounded-3xl"
                    >
                        <TodoArcLogo
                            className="max-w-[200px] max-h-[100px] w-full h-full mb-[20px] mt-[20px]"
                            viewBox="50 150 420 220"
                        />
                        <h1 className="text-white text-xl font-semibold mt-[10px]">Вход</h1>
                        <div className="relative flex flex-col gap-[13px] max-h-[250px] h-full">
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
                            <Button
                                type="submit"
                                text="Войти"
                                className="bg-darkblue-400 max-w-[243px] w-full h-[40px] rounded-3xl text-white font-semibold transition duration-200 hover:bg-darkblue-500"
                            />
                        </div>
                        <Link to="/signin">
                            <P
                                text="У вас нет аккаунта? Зарегистрируйтесь!"
                                className="text-white max-w-[300px] text-center mb-[20px] transition duration-200 hover:text-[#cdcdcd]"
                            />
                        </Link>
                    </Form>
                </div>
            )}
        </Formik>
    )
}
