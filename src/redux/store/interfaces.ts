export interface Result<T> {
    data: T,
    isLoading?: boolean;
    error: string
}

export interface IUser {
    login: string;
    password: string;
}

export interface IFilm {
    id: number;
    title: string;
    vote_average: number;
    [key: string]: any;
}

export interface IResponse {
    page: number;
    results: Array<IFilm>;
    total_pages: number;
}

export interface IGenre {
    id: number;
    name: string;
}

export interface IGenreResponse {
    genres: Array<IGenre>;
}

export interface IFilters {
    genreValue: string;
    sortValue: string;
    averageValue: number;
}

export interface SortParams {
    [key: string]: string;
}

export interface FiltersResult<T> {
    data: T;
    searchValue: string;
}

export interface IHomeSelector {
    filmsData: {
        data: IResponse;
    };
    genreData: {
        data: IGenreResponse;
    };
}

export interface INavbarSelector {
    authResult: {
        data: {
            login: string;
        };
    };
    filmsData: {
        data: {
            page: number;
        };
    };
}

export interface ISignInSelector {
    authResult: {
        data: IUser;
        error: string;
    };
}

export interface IFilmInfo {
    filmByIdData: {
        data: {
            title: string;
            vote_average: number,
        };
    };
}

export interface IFavorites {
    favFilmsData: Array<IFilm>;
}

export interface IFavoriteSelector {
    favoritesData: IFavorites;
}