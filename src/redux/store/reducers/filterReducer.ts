import { FiltersAction } from '../types';
import { FiltersActionType } from '../action-creators/ActionTypes';
import { IFilters, FiltersResult } from '../interfaces';


const initialState: FiltersResult<IFilters> = {
    data: {
        genreValue: '',
        sortValue: '',
        averageValue: 6,
    },
    searchValue: ''
}

export const filterReducer = (state = initialState, action: FiltersAction): FiltersResult<IFilters> => {
    switch(action.type) {
        case FiltersActionType.SET_SEARCH:
            return {
                ...state,
                searchValue: action.payload
            };
        case FiltersActionType.SET_GENRE:
            return {
                ...state,
                data: {
                    ...state.data,
                    genreValue: action.payload
                }
            };
        case FiltersActionType.SET_SORT:
            return {
                ...state,
                data: {
                    ...state.data,
                    sortValue: action.payload
                }
            };
        case FiltersActionType.SET_AVERAGE:
            return {
                ...state,
                data: {
                    ...state.data,
                    averageValue: action.payload
                }
            };
        default:
            return state;
    }
}