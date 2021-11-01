import { combineReducers } from 'redux';
import { signUpReducer } from './authReducers/signUpReducer';
import { signInReducer } from './authReducers/signInReducer';
import { signOutReducer } from './authReducers/signOutReducer';


export const rootReducer = combineReducers({
    signUp: signUpReducer,
    signIn: signInReducer,
    signOut: signOutReducer
});


export type RootState = ReturnType<typeof rootReducer>;