// libs
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Navbar } from '../components/Navbar';
import Grid from '@mui/material/Grid';
import Rating from '@mui/material/Rating';
import CardMedia from '@mui/material/CardMedia';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// middlewares
import { getFilmById } from '../redux/store/middlewares/filmByIdMiddleware';

// typed hooks, selectors, styles, constants
import { useTypedSelector } from '../hooks/useTypedSelector';
import { filmInfoSelector } from '../components/selectors/selectors';
import { filmCard } from '../dist/style/FilmInfo/FilmInfoStyle';
import { CONFIG_IMAGE_LINK } from '../constants';


export const FilmInfo = () => {
    const { filmId } = useParams();
    const dispatch = useDispatch();
    const { title, vote_average, poster_path,
        overview, popularity, release_date } = useTypedSelector(filmInfoSelector);

    useEffect(() => {
        dispatch(getFilmById(filmId));
    }, [filmId]);

    return (
        <>
            <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
                spacing={12}
            >
                <Grid item>
                    <Navbar />
                </Grid>
                <Grid item>
                    <Grid
                        container
                        direction="row"
                        spacing={12}
                    >
                        <Grid item>
                            <Card sx={filmCard.card}>
                                <CardMedia
                                    component="img"
                                    sx={filmCard.media}
                                    image={`${CONFIG_IMAGE_LINK}${poster_path}`}
                                    alt={title}
                                />
                                <Box sx={filmCard.box}>
                                    <CardContent sx={filmCard.content}>
                                        <Typography
                                            component="div"
                                            variant="h5"
                                        >
                                            {title}
                                        </Typography>
                                        <Typography
                                            variant="subtitle1"
                                            color="text.secondary"
                                            component="div"
                                        >
                                            Vote average: {vote_average}
                                        </Typography>
                                        <Typography
                                            sx={filmCard.overview}
                                            component="div"
                                            variant="h5"
                                        >
                                            {overview}
                                        </Typography>
                                        <Typography
                                            sx={filmCard.overview}
                                            component="div"
                                            variant="h6"
                                        >
                                            Release date: {release_date}
                                        </Typography>
                                        <Typography sx={filmCard.overview}>Popularity:</Typography>
                                        <Rating
                                            readOnly
                                            max={5}
                                            value={popularity}
                                        />
                                    </CardContent>
                                </Box>
                            </Card>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
}