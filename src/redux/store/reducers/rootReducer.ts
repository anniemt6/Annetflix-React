import { combineReducers } from 'redux';
import { authReducer } from './authReducer';
import { filmReducer } from './filmReducer';
import { genreReducer } from './genreReducer';
import { filmByIdReducer } from './filmByIdReducer';
import { filterReducer } from './filterReducer';
import { favoritesReducer } from './favoritesReducer';


export const rootReducer = combineReducers({
    authResult: authReducer,
    filmsData: filmReducer,
    genreData: genreReducer,
    filmByIdData: filmByIdReducer,
    filtersData: filterReducer,
    favoritesData: favoritesReducer
});


export type RootState = ReturnType<typeof rootReducer>;