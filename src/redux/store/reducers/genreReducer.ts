import { IGenreResponse, Result } from '../interfaces';
import { GenresAction } from '../types';
import { GenresActionType } from '../action-creators/ActionTypes';

const initialState: Result<IGenreResponse> = {
    data: {
        genres: []
    },
    isLoading: false,
    error: ''
};

export const genreReducer = (state = initialState, action: GenresAction): Result<IGenreResponse> => {
    switch(action.type) {
        case GenresActionType.SET_GENRES_DATA:
            return {
                ...state,
                data: action.payload
            };
        case GenresActionType.SET_GENRES_LOADING:
            return {
                ...state,
                isLoading: action.payload
            };
        case GenresActionType.SET_GENRES_ERROR:
            return {
                ...state,
                error: action.payload
            };
        default:
            return state;
    }
}