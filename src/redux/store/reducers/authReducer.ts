import { ResetActionType, ResultActionType } from '../action-creators/ActionTypes';
import { IUser, Result } from '../interfaces';
import { AuthResultOrReset } from '../types';

const initialState: Result<IUser> = {
    data: {
        login: '',
        password: ''
    },
    error: ''
};

export const authReducer = (state = initialState, action: AuthResultOrReset): Result<IUser> => {
    switch (action.type) {
        case ResultActionType.ERROR:
            return {
                data: { login: '', password: '' },
                error: `There is no user with login ${action.payload.login}`
            };
        case ResultActionType.SUCCESS:
            return { data: action.payload, error: '' };
        case ResetActionType.RESET:
            return { ...initialState };
        default:
            return state;
    }
}