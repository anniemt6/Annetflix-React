import { combineReducers } from 'redux';
import { authReducer } from './authReducer';


export const rootReducer = combineReducers({
    authResult: authReducer
});


export type RootState = ReturnType<typeof rootReducer>;