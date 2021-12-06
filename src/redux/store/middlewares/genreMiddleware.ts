// libs
import { Dispatch } from 'redux';

// action-creators
import { setGenresData, setGenresError, setGenresLoading } from '../action-creators/actions';

// interfaces, types, url-builders
import { IGenreResponse } from '../interfaces';
import { GenresAction } from '../types';
import { buildFetchGenresUrl, fetchData } from '../../../api/fetchData';


export const setGenres = () => (dispatch: Dispatch<GenresAction>): void => {
    dispatch(setGenresLoading(true));
    fetchData<IGenreResponse>(buildFetchGenresUrl())
        .then(response => {
            dispatch(setGenresData(response));
        })
        .catch(e => {
            dispatch(setGenresError(e.message));
        });
}