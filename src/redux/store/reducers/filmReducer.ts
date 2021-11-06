import React from 'react';
import { IFilm, IFilmInitState } from '../interfaces';
import { Action } from '../action-creators/actions';
import { ResultActionType } from '../action-creators/ActionTypes';


const initialState: IFilmInitState = {
    films: []
}

export const filmReducer = (state: IFilmInitState, action: Action<ResultActionType, Array<IFilm>>): IFilmInitState => {

}