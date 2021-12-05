import { FilmsActionType } from '../action-creators/ActionTypes';
import { IResponse, Result } from '../interfaces';
import { FilmsAction } from '../types';


const initialState: Result<IResponse> = {
    data: {
        page: 1,
        results: [],
        total_pages: 0
    },
    isLoading: false,
    error: ''
};


export const filmReducer = (state = initialState, action: FilmsAction): Result<IResponse> => {
    switch(action.type) {
        case FilmsActionType.SET_FILMS_DATA:
            return {
                ...state,
                data: action.payload
            };
        case FilmsActionType.SET_FILMS_LOADING:
            return {
                ...state,
                isLoading: action.payload
            };
        case FilmsActionType.SET_FILMS_ERROR:
            return {
                ...state,
                error: action.payload
            };
        default:
            return state;
    }
}