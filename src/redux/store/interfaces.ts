export interface Result<T> {
    data: T,
    error: string
}

export interface IUser {
    login: string;
    password: string;
}