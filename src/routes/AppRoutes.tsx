import { privateRoutes, publicRoutes } from "./routes"
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAppSelector } from "../hooks/useAppSelector";
import Cookies from 'js-cookie'

export const AppRoutes: React.FC = () => {

    const isAuth = useAppSelector(state => state.userReducer.isAuth);
    const isAuthCookie = Cookies.get('isAuth')

    return isAuth || isAuthCookie ? (
        <Routes>
            {privateRoutes.map((route) => (
                <Route key={route.path} path={route.path} element={<route.element />} />
            ))}
            <Route path="/*" element={<Navigate to="/todos" />} />
        </Routes>
    ) : (
        <Routes>
            {publicRoutes.map((route) => (
                <Route key={route.path} path={route.path} element={<route.element />} />
            ))}
            <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
    )
}