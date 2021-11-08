import React from 'react';


export interface IUser {
    login: string;
    password?: string;
}

export interface IFilm {
    id: number;
    name: string;
    imgUrl: string;
    description: string;
    genre: Array<string>;
}

export interface IFilmInitState {
    films: Array<IFilm>;
}