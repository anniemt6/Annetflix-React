import { IUser, SortParams } from './redux/store/interfaces';

export const API_KEY: string = '746dccd4388930bd073e9b330d5bdf9d';
export const API_LINK: string = 'https://api.themoviedb.org';
export const CONFIG_IMAGE_LINK: string = 'https://image.tmdb.org/t/p/w500';

export const USERS: IUser[] = [
    { login: 'anniemt6', password: 'anna12345' },
];

export const SORT_PARAMS: SortParams = {
    'popularity.asc': 'Popularity ascending',
    'popularity.desc': 'Popularity descending',
    'release_date.asc': 'Release date ascending',
    'release_date.desc': 'Release date descending',
    'vote_average.asc': 'Vote ascending',
    'vote_average.desc': 'Vote descending'
};