import {
    FilmByIdActionType,
    FilmsActionType,
    FiltersActionType,
    GenresActionType,
    ResetActionType,
    ResultActionType
} from './ActionTypes';
import { IFilm, IGenreResponse, IResponse, IUser } from '../interfaces';
import {
    Action,
    FilmByIdAction,
    FilmsAction,
    FiltersAction,
    GenresAction
} from '../types';


export const resetState = (): Action<ResetActionType, any> => ({
    type: ResetActionType.RESET,
    payload: null
});

export const setUserSuccess = (user: IUser): Action<ResultActionType, IUser> => ({
    type: ResultActionType.SUCCESS,
    payload: user
});

export const setUserError = (user: IUser): Action<ResultActionType, IUser> => ({
    type: ResultActionType.ERROR,
    payload: user
});

export const setFilmData = (data: IResponse): FilmsAction => ({
    type: FilmsActionType.SET_FILMS_DATA,
    payload: data
});

export const setFilmLoading = (loading: boolean): FilmsAction => ({
    type: FilmsActionType.SET_FILMS_LOADING,
    payload: loading
});

export const setFilmError = (error: string): FilmsAction => ({
    type: FilmsActionType.SET_FILMS_ERROR,
    payload: error
});

export const setGenresData = (data: IGenreResponse): GenresAction => ({
    type: GenresActionType.SET_GENRES_DATA,
    payload: data
});

export const setGenresLoading = (loading: boolean): GenresAction => ({
    type: GenresActionType.SET_GENRES_LOADING,
    payload: loading
});

export const setGenresError = (error: string): GenresAction => ({
    type: GenresActionType.SET_GENRES_ERROR,
    payload: error
});

export const setFilmById = (data: IFilm): FilmByIdAction => ({
    type: FilmByIdActionType.SET_FILM_BY_ID,
    payload: data
});

export const setFilmByIdLoading = (loading: boolean): FilmByIdAction => ({
    type: FilmByIdActionType.SET_FILM_BY_ID_LOADING,
    payload: loading
});

export const setFilmByIdError = (error: string): FilmByIdAction => ({
    type: FilmByIdActionType.SET_FILM_BY_ID_ERROR,
    payload: error
});

export const setSearch = (searchQuery: string): FiltersAction => ({
    type: FiltersActionType.SET_SEARCH,
    payload: searchQuery
});

export const setGenre = (genreValue: string): FiltersAction => ({
    type: FiltersActionType.SET_GENRE,
    payload: genreValue
});

export const setSort = (sortValue: string): FiltersAction => ({
    type: FiltersActionType.SET_SORT,
    payload: sortValue
});

export const setAverage = (averageValue: number): FiltersAction => ({
    type: FiltersActionType.SET_AVERAGE,
    payload: averageValue
});

export const setFavorites = (data: Array<IFilm>): FilmsAction => ({
    type: FilmsActionType.ADD_FAVORITES,
    payload: data
});