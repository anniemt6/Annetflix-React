// libs
import { Dispatch } from 'redux';

// action-creators
import {
    setFilmById,
    setFilmByIdError,
    setFilmByIdLoading,
} from '../action-creators/actions';

// interfaces, types, url-builders
import { IFilm } from '../interfaces';
import { FilmByIdAction } from '../types';
import { buildFetchFilmByIdUrl, fetchData } from '../../../api/fetchData';


export const getFilmById = (id: string | undefined) => (dispatch: Dispatch<FilmByIdAction>): void => {
    dispatch(setFilmByIdLoading(true));
    fetchData<IFilm>(buildFetchFilmByIdUrl(id))
        .then(response => {
            dispatch(setFilmById(response));
        })
        .catch(e => {
            dispatch(setFilmByIdError(e.message));
        });
}