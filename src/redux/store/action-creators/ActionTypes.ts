import React from 'react';


export const enum AuthActionType {
    SIGN_UP = 'SIGN_UP',
    SIGN_IN = 'SIGN_IN',
    SIGN_OUT = 'SIGN_OUT'
}

export const enum FilmsActionType {
    FETCH_FILMS = 'ADD_FILMS',
    SAVE_TO_FAVORITES = 'SAVE_TO_FAVORITES',
    REMOVE_FROM_FAVORITES = 'REMOVE_FROM_FAVORITES',
    FILTER_BY_GENRE = 'FILTER_BY_GENRE'
}

export const enum ResultActionType {
    SUCCESS = 'SUCCESS',
    ERROR = 'ERROR'
}