import {
    FilmByIdActionType,
    FilmsActionType, FiltersActionType,
    GenresActionType,
    ResetActionType,
    ResultActionType
} from './action-creators/ActionTypes';
import { IFilm, IGenreResponse, IResponse, IUser } from './interfaces';


export type Action<T, P> = {
    type: T
    payload: P
}

export type FilmsLoadedAction = Action<FilmsActionType.SET_FILMS_DATA, IResponse>;
export type FilmsLoadingAction = Action<FilmsActionType.SET_FILMS_LOADING, boolean>;
export type FilmsLoadingErrorAction = Action<FilmsActionType.SET_FILMS_ERROR, string>;
export type FilmsAddFavAction = Action<FilmsActionType.ADD_FAVORITES, Array<IFilm>>;
export type FilmsAction = FilmsLoadedAction | FilmsLoadingAction | FilmsLoadingErrorAction | FilmsAddFavAction;

export type ResetType = Action<ResetActionType, any>;
export type AuthResult = Action<ResultActionType, IUser>;
export type AuthResultOrReset = AuthResult | ResetType;

export type GenresLoadedAction = Action<GenresActionType.SET_GENRES_DATA, IGenreResponse>;
export type GenresLoadingAction = Action<GenresActionType.SET_GENRES_LOADING, boolean>;
export type GenresLoadingErrorAction = Action<GenresActionType.SET_GENRES_ERROR, string>;
export type GenresAction = GenresLoadedAction | GenresLoadingAction | GenresLoadingErrorAction;

export type FilmByIdLoadedAction = Action<FilmByIdActionType.SET_FILM_BY_ID, IFilm>;
export type FilmByIdLoadingAction = Action<FilmByIdActionType.SET_FILM_BY_ID_LOADING, boolean>;
export type FilmByIdLoadingErrorAction = Action<FilmByIdActionType.SET_FILM_BY_ID_ERROR, string>;
export type FilmByIdAction = FilmByIdLoadedAction | FilmByIdLoadingAction | FilmByIdLoadingErrorAction;

export type SearchAction = Action<FiltersActionType.SET_SEARCH, string>;
export type GenreAction = Action<FiltersActionType.SET_GENRE, string>;
export type SortAction = Action<FiltersActionType.SET_SORT, string>;
export type AverageAction = Action<FiltersActionType.SET_AVERAGE, number>;
export type FiltersAction = SearchAction | GenreAction | SortAction | AverageAction;