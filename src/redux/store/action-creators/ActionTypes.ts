export const enum ResultActionType {
    SUCCESS = "SUCCESS",
    ERROR = "ERROR"
}

export const enum ResetActionType {
    RESET = 'RESET'
}

export const enum FilmsActionType {
    SET_FILMS_DATA = 'SET_FILMS_DATA',
    SET_FILMS_LOADING = 'SET_FILMS_LOADING',
    SET_FILMS_ERROR = 'SET_FILMS_ERROR',
    ADD_FAVORITES = 'ADD_FAVORITES',
}

export const enum GenresActionType {
    SET_GENRES_DATA = 'SET_GENRES_DATA',
    SET_GENRES_LOADING = 'SET_GENRES_LOADING',
    SET_GENRES_ERROR = 'SET_GENRES_ERROR'
}

export const enum FilmByIdActionType {
    SET_FILM_BY_ID = 'SET_FILM_BY_ID',
    SET_FILM_BY_ID_LOADING = 'SET_FILM_BY_ID_LOADING',
    SET_FILM_BY_ID_ERROR = 'SET_FILM_BY_ID_ERROR'
}

export const enum FiltersActionType {
    SET_SEARCH = 'SET_SEARCH',
    SET_GENRE = 'SET_GENRE',
    SET_SORT = 'SET_SORT',
    SET_AVERAGE = 'SET_AVERAGE'
}