// libs
import { Dispatch } from 'redux';

// action-creators
import { setFilmData, setFilmError, setFilmLoading } from '../action-creators/actions';

// interfaces, types, url-builders
import { IFilters, IResponse } from '../interfaces';
import { FilmsAction } from '../types';
import { buildFetchFilmsUrl, fetchData } from '../../../api/fetchData';


const initialValues: Partial<IFilters> = {
    genreValue: '',
    sortValue: '',
    averageValue: 6
};

export const setFilms = (page: number, filters = initialValues) => (dispatch: Dispatch<FilmsAction>): void => {
    dispatch(setFilmLoading(true));
    fetchData<IResponse>(buildFetchFilmsUrl(page, filters))
        .then(response => {
            dispatch(setFilmData(response));
        })
        .catch(e => {
            dispatch(setFilmError(e.message));
        });
}