// libs
import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom';
import { useDispatch } from 'react-redux';

// components
import { Home } from './pages/Home';
import { SignIn } from './pages/SignIn';
import { Favorites } from './pages/Favorites';
import { FilmInfo } from './pages/FilmInfo';

// interfaces
import { IFilm } from './redux/store/interfaces';

// action-creators
import { setFavorites } from './redux/store/action-creators/actions';


export const App = () => {
    const dispatch = useDispatch();
    const storedData: string | null = localStorage.getItem('Film');
    let favFilms: Array<IFilm> = JSON.parse(storedData!) || [];
    dispatch(setFavorites(favFilms));

    return (
        <Router>
            <Routes>
                <Route path="/" element={<SignIn />} />
                <Route path="/home" element={<Home />} />
                <Route path="/favorites" element={<Favorites />} />
                <Route path="/home/:filmId" element={<FilmInfo />} />
            </Routes>
        </Router>
    );
}