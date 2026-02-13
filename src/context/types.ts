
import { IUser } from "../types/user";

export interface IAuthContext {
    user: IUser | null;
    signIn: (data: ISignInData) => Promise<void>;
}


export interface IAuthContextProviderProps {
    children: React.ReactNode;
}

export interface ISignInData {
    email: string;
    password: string;
}