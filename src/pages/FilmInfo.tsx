// libs
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

// middlewares
import { getFilmById } from '../redux/store/middlewares/filmByIdMiddleware';

// typed hooks, selector
import { useTypedSelector } from '../hooks/useTypedSelector';
import { filmInfoSelector } from '../components/selectors/selectors';


export const FilmInfo = () => {
    const { filmId } = useParams();
    const dispatch = useDispatch();
    const { title, vote_average } = useTypedSelector(filmInfoSelector);

    useEffect(() => {
        dispatch(getFilmById(filmId));
    }, [filmId]);

    // TODO: have to implement in near future
    return (
        <>
            {`hello this is ${title} und ich bin ${vote_average}`}
        </>
    );
}