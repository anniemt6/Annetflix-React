// libs
import * as React from 'react';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import FavoriteIcon from '@mui/icons-material/Favorite';

// interfaces, constants
import { IFilm } from '../redux/store/interfaces';
import { CONFIG_IMAGE_LINK } from '../constants';

// images, styles
import { card } from '../dist/style/FilmCard/FilmCardStyle';
import NoImage from '../dist/img/no-image.jpg';
import { StyledRouteFilmInfo } from '../dist/style/FilmCard/StyledRouteFilmInfo';

// middlewares
import { addOrRemoveFavoriteFilm, isInArray } from '../redux/store/middlewares/favoritesMiddleware';

// typed hooks, selectors
import { useTypedSelector } from '../hooks/useTypedSelector';
import { favoritesSelector } from './selectors/selectors';


export interface IFilmCardProps {
    item: IFilm;
}

export const FilmCard = ({ item }: IFilmCardProps) => {
    const dispatch = useDispatch();
    const { favFilmsData } = useTypedSelector(favoritesSelector);
    const [favoriteBtnColor, setFavoriteBtnColor] = useState<boolean>(false);

    useEffect(() => {
        setFavoriteBtnColor(isInArray(item.id, favFilmsData));
    },[favoriteBtnColor]);

    const isImg = (): string => {
        const image: string = `${CONFIG_IMAGE_LINK}/${item.poster_path}`;
        return item.poster_path === null ? NoImage : image;
    }

    const handleOnFavoriteIconClick = (id: number, film: IFilm) => {
        if (isInArray(id, favFilmsData)) {
            setFavoriteBtnColor(false);
            dispatch(addOrRemoveFavoriteFilm(id, film));
        } else {
            setFavoriteBtnColor(true);
            dispatch(addOrRemoveFavoriteFilm(id, film));
        }
    }

    return (
        <Card sx={card.heightCard}>
            <CardMedia
                component="img"
                height="300"
                image={isImg()}
            />
            <CardContent>
                <Typography>
                    {item.title}
                </Typography>
            </CardContent>
            <CardActions disableSpacing sx={card.cardAction}>
                <IconButton
                    onClick={() => handleOnFavoriteIconClick(item.id, item)}
                    color={favoriteBtnColor ? 'error' : 'default'}
                >
                    <FavoriteIcon />
                </IconButton>
                <Button
                    type="button"
                    variant="outlined"
                    color="error"
                >
                    <StyledRouteFilmInfo to={`/home/${item.id}`}>
                        About
                    </StyledRouteFilmInfo>
                </Button>
            </CardActions>
        </Card>
    );
}