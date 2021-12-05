import { IFilm, Result } from '../interfaces';
import { FilmByIdAction } from '../types';
import { FilmByIdActionType } from '../action-creators/ActionTypes';

const initialState: Result<IFilm> = {
    data: {
        id: 1,
        title: '',
        vote_average: 0,
        poster_path: '',
        overview: '',
        popularity: 0,
        release_date: ''
    },
    isLoading: false,
    error: ''
};

export const filmByIdReducer = (state = initialState, action: FilmByIdAction): Result<IFilm> => {
    switch(action.type) {
        case FilmByIdActionType.SET_FILM_BY_ID:
            return {
                ...state,
                data: action.payload
            };
        case FilmByIdActionType.SET_FILM_BY_ID_LOADING:
            return {
                ...state,
                isLoading: action.payload
            };
        case FilmByIdActionType.SET_FILM_BY_ID_ERROR:
            return {
                ...state,
                error: action.payload
            };
        default:
            return state;
    }
}