import { Dispatch, Middleware } from 'redux';
import { resetState, setUserError, setUserSuccess } from '../action-creators/actions';
import { AuthActionType, ResetActionType } from '../action-creators/ActionTypes';
import { IUser } from '../interfaces';
import { USERS } from '../../../constants';
import { AuthOrResetAction, AuthResultOrReset } from '../types';

const defaultUser: IUser = { login: '', password: '' };

export const authMiddleware: Middleware = _ => (next: Dispatch<AuthResultOrReset>) => (action: AuthOrResetAction) => {
    switch (action.type) {
        case AuthActionType.SIGN_IN:
            const user = USERS.find(
                user => user.login === action.payload.login && user.password === action.payload.password
            );
            if (typeof user !== 'undefined') {
                return next(setUserSuccess(user));
            } else {
                return next(setUserError(action.payload));
            }
        case ResetActionType.RESET:
            return next(resetState());
        default: next(setUserError(defaultUser));
    }
}