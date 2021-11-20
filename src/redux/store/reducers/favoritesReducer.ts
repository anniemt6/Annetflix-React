import { IFavorites } from '../interfaces';
import { FilmsAction } from '../types';
import { FilmsActionType } from '../action-creators/ActionTypes';


const initialState: IFavorites = {
    favFilmsData: []
}

export const favoritesReducer = (state = initialState, action: FilmsAction): IFavorites => {
    switch (action.type) {
        case FilmsActionType.ADD_FAVORITES:
            return {
                favFilmsData: action.payload
            };
        default:
            return state;
    }
}