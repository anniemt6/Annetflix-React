import { API_KEY, API_LINK } from '../constants';
import { UrlBuilder } from './UrlBuilder';
import { IFilters } from '../redux/store/interfaces';

export async function fetchData<T>(url: string): Promise<T> {
    const response = await fetch(url);
    return await response.json();
}

export const buildFetchFilmsUrl = (page: number, { genreValue, sortValue, averageValue }: Partial<IFilters>): string => {
    return new UrlBuilder(API_LINK)
        .path('3')
        .path('discover')
        .path('movie')
        .queryParam('api_key', API_KEY)
        .queryParam('with_genres', genreValue)
        .queryParam('sort_by', sortValue)
        .queryParam('vote_average', averageValue)
        .queryParam('page', page)
        .buildUrl();
}

export const buildFetchSearchFilmsUrl = (page: number, inpValue: string): string => {
    return new UrlBuilder(API_LINK)
        .path('3')
        .path('search')
        .path('movie')
        .queryParam('api_key', API_KEY)
        .queryParam('query', inpValue)
        .queryParam('page', page)
        .buildUrl();
}

export const buildFetchGenresUrl = (): string => {
    return new UrlBuilder(API_LINK)
        .path('3')
        .path('genre')
        .path('movie')
        .path('list')
        .queryParam('api_key', API_KEY)
        .queryParam('language', 'en-US')
        .buildUrl();
}

export const buildFetchFilmByIdUrl = (id: string | undefined): string => {
    return new UrlBuilder(API_LINK)
        .path('3')
        .path('movie')
        .path(`${id}`)
        .queryParam('api_key', API_KEY)
        .buildUrl()
}