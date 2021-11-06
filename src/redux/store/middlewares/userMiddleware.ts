import React from 'react';
import { Action } from '../action-creators/actions';
import { AuthActionType, ResultActionType } from '../action-creators/ActionTypes';
import { IUser } from '../interfaces';


export const userMiddleware = () =>
    (dispatch: Action<AuthActionType, IUser>): Action<ResultActionType, IUser> | string> => {

}