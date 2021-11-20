// libs
import React from 'react';
import Grid from '@mui/material/Grid';

// components
import { FilmCard } from '../components/FilmCard';
import { Navbar } from '../components/Navbar';

// typed hooks, selectors
import { useTypedSelector } from '../hooks/useTypedSelector';
import { favoritesSelector } from '../components/selectors/selectors';


export const Favorites = () => {
    const { favFilmsData } = useTypedSelector(favoritesSelector);

    const displayFavorites = () => {
        return favFilmsData.map(film => {
            return (
                <React.Fragment key={film.id}>
                    <Grid item sx={{ mb: 4 }}>
                        <FilmCard item={film} />
                    </Grid>
                </React.Fragment>
            );
        });
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
                <Grid item xs={12}>
                    <Navbar />
                </Grid>
                <Grid item xs={12}>
                    <Grid container spacing={8}>
                        {displayFavorites()}
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
}