import { AuthActionType, ResetActionType, ResultActionType } from './ActionTypes';
import { IUser } from '../interfaces';
import { Action } from '../types';


export const resetState = (): Action<ResetActionType, any> => ({
    type: ResetActionType.RESET,
    payload: null
});

export const signIn = (values: IUser): Action<AuthActionType, IUser> => ({
    type: AuthActionType.SIGN_IN,
    payload: values
});

export const setUserSuccess = (user: IUser): Action<ResultActionType, IUser> => ({
    type: ResultActionType.SUCCESS,
    payload: user
});

export const setUserError = (user: IUser): Action<ResultActionType, IUser> => ({
    type: ResultActionType.ERROR,
    payload: user
});