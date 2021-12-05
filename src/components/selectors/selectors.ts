import {
    IFavoriteSelector,
    IFilmInfo,
    IHomeSelector,
    INavbarSelector,
    ISignInSelector
} from '../../redux/store/interfaces';


export const homeSelector =
    ({
         filmsData: {
             data: {
                 page,
                 results,
                 total_pages
             }
         },
         genreData: {
             data: {
                 genres
             }
         }
    }: IHomeSelector) => ({ page, results, total_pages, genres });

export const navbarSelector =
    ({
         authResult: {
             data: {
                 login
             }
         },
         filmsData: {
             data: {
                 page
             }
         }
    }: INavbarSelector) => ({ login, page });

export const singInSelector =
    ({
         authResult: {
             data: {
                 login,
                 password,
             },
             error
         }
    }: ISignInSelector) => ({ login, password, error });

export const filmInfoSelector =
    ({
         filmByIdData: {
             data: {
                 title,
                 vote_average,
                 poster_path,
                 overview,
                 popularity,
                 release_date
             }
         },
    }: IFilmInfo) =>
        ({
            title,
            vote_average,
            poster_path,
            overview,
            popularity,
            release_date
        });

export const favoritesSelector =
    ({
         favoritesData: {
             favFilmsData
         }
    }: IFavoriteSelector) => ({ favFilmsData });