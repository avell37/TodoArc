export interface User {
    id: string,
    email: string,
    username: string,
    password: string,
    repeatPassword: string,
}

export interface UserAuthState {
    users: User[],
    usersLoadingStatus: "idle" | "loading" | "error"
}

// id: number | string,
//     username: string,
//     password: string,
//     repeatPassword: string,
//     userLoadingStatus: string