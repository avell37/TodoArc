import { privateRoutes, publicRoutes } from "./routes"
import { Routes, Route, Navigate } from 'react-router-dom';

export const AppRoutes: React.FC = () => {

    const isAuth: boolean = false;

    return isAuth ? (
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