// libs
import { Dispatch } from 'redux';

// action-creators
import {
    setUserError,
    setUserSuccess
} from '../action-creators/actions';

// interfaces, constants, types
import { IUser } from '../interfaces';
import { USERS } from '../../../constants';
import { AuthResultOrReset } from '../types';


export const signIn = (user: IUser) => (dispatch: Dispatch<AuthResultOrReset>) => {
    const savedUser = USERS.find(
        saved => saved.login === user.login && saved.password === user.password
    );
    if (savedUser) {
        dispatch(setUserSuccess(savedUser));
    } else {
        dispatch(setUserError(user));
    }
}