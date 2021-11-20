// libs
import { Dispatch } from 'redux';

// action-creators
import { setFilmData, setFilmError, setFilmLoading } from '../action-creators/actions';

// interfaces, types, url-builders
import { IResponse } from '../interfaces';
import { FilmsAction } from '../types';
import { buildFetchSearchFilmsUrl, fetchData } from '../../../api/fetchData';


export const setSearchFilms = (page: number, inpValue: string) => (dispatch: Dispatch<FilmsAction>): any => {
    dispatch(setFilmLoading(true));
    fetchData<IResponse>(buildFetchSearchFilmsUrl(page, inpValue))
        .then(response => {
            dispatch(setFilmData(response));
        })
        .catch(e => {
            dispatch(setFilmError(e.message));
        });
}


