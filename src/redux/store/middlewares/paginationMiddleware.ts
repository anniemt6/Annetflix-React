// libs
import { Action } from 'redux';
import { ThunkDispatch } from 'redux-thunk';

// middlewares
import { setSearchFilms } from './searchMiddleware';
import { setFilms } from './filmMiddleware';

// types
import { RootState } from '../reducers/rootReducer';


export const getFilms = (page: number) => async (dispatch: ThunkDispatch<RootState, void, Action>, getState: Function) => {
    const { filtersData: { data, searchValue } } = getState();
    if (searchValue) {
        await dispatch(setSearchFilms(page, searchValue));
    } else {
        await dispatch(setFilms(page, data));
    }
}