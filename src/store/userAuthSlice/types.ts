export interface User {
    id: string,
    email: string,
    username: string,
    password: string,
    repeatPassword: string,
}

export interface UserAuthState {
    users: User[],
    usersLoadingStatus: string,
    isAuth: boolean
}