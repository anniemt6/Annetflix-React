import React from 'react';
import { IUser } from '../interfaces';
import { Action } from '../action-creators/actions';
import { AuthActionType, ResultActionType } from '../action-creators/ActionTypes';


const initialState: IUser = {
    login: '',
    password: ''
}

export const userReducer = (state: IUser, action: Action<ResultActionType, IUser>): IUser => {

}