import { Action } from '../action-creators/actions';
import { FilmsActionType, ResultActionType } from '../action-creators/ActionTypes';
import { IFilm } from '../interfaces';


export const filterMiddleware = () =>
    (dispatch: Action<FilmsActionType, Array<IFilm>>): Action<ResultActionType, Array<IFilm>> | string> => {

}