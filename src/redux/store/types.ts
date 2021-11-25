import { AuthActionType, ResetActionType, ResultActionType } from './action-creators/ActionTypes';
import { IUser } from './interfaces';

export type Action<T, P> = {
    type: T
    payload: P
}

export type ResetType = Action<ResetActionType, any>;
export type AuthType = Action<AuthActionType, IUser>;
export type AuthResult = Action<ResultActionType, IUser>;

export type AuthOrResetAction = AuthType | ResetType;
export type AuthResultOrReset = AuthResult | ResetType;