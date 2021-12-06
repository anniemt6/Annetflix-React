// libs
import React, { ChangeEvent } from 'react';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import Pagination from '@mui/material/Pagination';
import Grid from '@mui/material/Grid';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Slider from '@mui/material/Slider';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

// components
import { FilmCard } from '../components/FilmCard';
import { Navbar } from '../components/Navbar';

// typed hooks
import { useTypedSelector } from '../hooks/useTypedSelector';

// middlewares
import { setGenres } from '../redux/store/middlewares/genreMiddleware';

// interfaces, constants
import { SORT_PARAMS } from '../constants';
import { setAverage, setGenre, setSearch, setSort } from '../redux/store/action-creators/actions';
import { getFilms } from '../redux/store/middlewares/paginationMiddleware';
import { homeSelector } from '../components/selectors/selectors';


export const Home = () => {
    const dispatch = useDispatch();
    const [genreColor, setGenreColor] = useState<Array<unknown>>([]);
    const { page, results, total_pages, genres } = useTypedSelector(homeSelector);

    useEffect(() => {
        dispatch(getFilms(page));
    }, [page]);

    useEffect(() => {
        dispatch(setGenres());
    }, [dispatch]);


    const displayFilms = () => {
        return results.map((film) => {
            return (
                <React.Fragment key={film.id}>
                    <Grid item xs={1} sx={{ mb: 4 }}>
                        <FilmCard item={film} />
                    </Grid>
                </React.Fragment>
            );
        });
    }

    const displayGenres = () => {
        return genres.map((genre, i: number) => {
            return (
                <Grid item>
                    <ListItem
                        key={genre.id}
                        onClick={
                            ({ currentTarget: { innerText }}) => {
                                handleGenresColor(i);
                                dispatch(setGenre(innerText));
                                dispatch(setSearch(''));
                            }
                        }
                    >
                        <ListItemText
                            sx={{
                                border: genreColor.indexOf(i) > 0 ? '1px solid black' : 'none',
                                borderRadius: '5px'
                            }}
                            primary={genre.name}
                        />
                    </ListItem>
                </Grid>
            );
        });
    }

    const displaySort = () => {
        const sortValues = Object.keys(SORT_PARAMS);
        const sortNames = Object.values(SORT_PARAMS);

        return sortValues.map((value, i) => {
            const selectContent = sortNames[i];
            return (
                <MenuItem value={value}>{selectContent}</MenuItem>
            );
        });
    }

    const handleGenresColor = (id: number) => {
        setGenreColor([genreColor, id]);
    }

    const handleSortingParamChange = ({ target: { value }}: SelectChangeEvent) => {
        dispatch(setSort(value));
        dispatch(setSearch(''));
    }

    const handleInputRange = (e: Event, inpValue: number | Array<number>) => {
        dispatch(setAverage(inpValue as number));
        dispatch(setSearch(''));
    }

    type MouseEvent = React.MouseEvent<HTMLAnchorElement> | React.MouseEvent<HTMLButtonElement>;
    const handleAllFilters = (e: MouseEvent, page = 1) => {
        dispatch(getFilms(page));
    }

    const handleResetFilters = () => {
        dispatch(setSearch(''));
        dispatch(setGenre(''));
        dispatch(setSort(''));
        dispatch(setAverage(6));
        dispatch(getFilms(page));
    }

    const handleFilms = (e: ChangeEvent<unknown>, page = 1) => {
        dispatch(getFilms(page));
    }

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
                    <Grid container columns={12}>
                        <Grid item xs={2}>
                            <Grid container spacing={8}>
                                <Grid item>
                                    <Grid
                                        container
                                        direction="row"
                                        justifyContent="flex-start"
                                        alignItems="flex-start"
                                        spacing={0.5}
                                    >
                                        {displayGenres()}
                                    </Grid>
                                </Grid>

                                <Grid item xs={11}>
                                    <FormControl fullWidth error>
                                        <InputLabel>Sort by films</InputLabel>
                                        <Select
                                            label="Sort by films"
                                            onChange={handleSortingParamChange}
                                        >
                                            {displaySort()}
                                        </Select>
                                    </FormControl>
                                </Grid>

                                <Grid item xs={11}>
                                    <Typography>Vote average</Typography>
                                    <Slider
                                        onChange={handleInputRange}
                                        step={0.1}
                                        max={10}
                                        defaultValue={5}
                                        aria-label="Default"
                                        valueLabelDisplay="auto"
                                        sx={{color: '#D32F2E'}}
                                    />
                                </Grid>

                                <Grid item xs={11}>
                                    <Button
                                        onClick={handleAllFilters}
                                        fullWidth
                                        size="large"
                                        color="error"
                                        variant="contained"
                                        type="button"
                                    >
                                        Apply filters
                                    </Button>
                                </Grid>
                                <Grid item xs={11}>
                                    <Button
                                        onClick={handleResetFilters}
                                        fullWidth
                                        size="large"
                                        color="error"
                                        variant="outlined"
                                        type="button"
                                    >
                                        Reset filters
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={10}>
                            <Grid
                                container
                                columns={5}
                            >
                                {results.length === 0 && <Typography>Nothing was found.</Typography>}
                                {displayFilms()}
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid item sx={{ mb: 5 }}>
                    <Pagination
                        count={total_pages}
                        onChange={handleFilms}
                        variant="outlined"
                        color="standard"
                    />
                </Grid>
            </Grid>
        </>
    );
}
