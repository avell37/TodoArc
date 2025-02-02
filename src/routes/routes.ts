import { WelcomePage } from "../components/pages/WelcomePage/WelcomePage"
import { Login } from "../components/pages/Login/Login"
import { Registration } from "../components/pages/Registration/Registration"
import { Account } from "../components/pages/Account/Account"
import { UserTodos } from "../components/pages/UserTodos/UserTodos"

interface Routes {
    path: string,
    element: React.FC
}

export const publicRoutes: Routes[] = [
    { path: '/', element: WelcomePage },
    { path: '/signIn', element: Registration },
    { path: '/login', element: Login }
]

export const privateRoutes: Routes[] = [
    { path: '/account', element: Account },
    { path: '/todos', element: UserTodos }
]
