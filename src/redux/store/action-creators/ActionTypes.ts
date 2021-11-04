import React from 'react';


export const enum AuthActionType {
    SIGN_UP = 'SIGN_UP',
    SIGN_IN = 'SIGN_IN',
    SIGN_OUT = 'SIGN_OUT'
}

export const enum AuthResultActionType {
    ERROR = 'ERROR',
    SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS',
    SIGN_IN_SUCCESS = 'SIGN_IN_SUCCESS'
}