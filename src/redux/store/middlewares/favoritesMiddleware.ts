// libs
import { Dispatch } from 'redux';

// interfaces, types, action-creators
import { IFilm } from '../interfaces';
import { FilmsAction } from '../types';
import { setFavorites } from '../action-creators/actions';


export const isInArray = (id: number, filmsArr: Array<IFilm>) => {
    return filmsArr.some(elem => elem.id === id);
}

const removeFromFav = (filmsArr: Array<IFilm>, film: IFilm): Array<IFilm> => {
    return filmsArr.filter(elem => elem.id !== film.id);
}

export const addOrRemoveFavoriteFilm = (id: number, film: IFilm) => (dispatch: Dispatch<FilmsAction>) => {
    const storedData: string | null = localStorage.getItem('Film');
    let favFilms: Array<IFilm> = JSON.parse(storedData!) || [];

    if (isInArray(id, favFilms)) {
        const updatedFilmsArr = removeFromFav(favFilms, film);
        localStorage.setItem('Film', JSON.stringify(updatedFilmsArr));
        dispatch(setFavorites(updatedFilmsArr));
        return;
    } else {
        favFilms.push(film);
        localStorage.setItem('Film', JSON.stringify(favFilms));
        dispatch(setFavorites(favFilms));
        return;
    }
}