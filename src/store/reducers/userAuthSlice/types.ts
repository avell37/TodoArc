import { IUser } from "../../../models/IUser";

export interface UserAuthState {
    users: IUser[],
    usersLoadingStatus: string,
    isAuth: boolean,
}