// libs
import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChangeEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import SearchIcon from '@mui/icons-material/Search';

// components
import { StyledInputBase } from '../dist/style/Navbar/StyledInputBase';
import { SearchIconWrapper } from '../dist/style/Navbar/SearchIconWrapper';
import { Search } from '../dist/style/Navbar/Search';
import { StyledRoute } from '../dist/style/Navbar/StyledRoute';
import { Logo } from './Logo';
import { navbar } from '../dist/style/Navbar/NavbarStyle';
import Button from '@mui/material/Button';

// typed hooks
import { useTypedSelector } from '../hooks/useTypedSelector';

// action-creators, middlewares, selectors
import { setSearch } from '../redux/store/action-creators/actions';
import { getFilms } from '../redux/store/middlewares/paginationMiddleware';
import { navbarSelector } from './selectors/selectors';


export const Navbar = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [searchValue, setSearchValue] = useState<string>('');
    const { login, page } = useTypedSelector(navbarSelector);

    const handleClick = () => {
        const path: string = '/';
        navigate(path);
    }

    const handleSearchValueChange = ({ target: { value }}: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        setSearchValue(value);
    }

    const handleSearchClick = () => {
        dispatch(setSearch(searchValue));
        setSearchValue('');
        dispatch(getFilms(page));
    }

    return (
        <Box sx={navbar.boxContainer}>
            <AppBar
                position="fixed"
                sx={navbar.appBarColor}
            >
                <Toolbar>
                    <Logo />
                    <Search>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                            value={searchValue}
                            onChange={handleSearchValueChange}
                            placeholder="Search films…"
                        />
                    </Search>
                    <Button
                        type="button"
                        color="error"
                        variant="contained"
                        onClick={handleSearchClick}
                    >
                        Search
                    </Button>
                    <Box sx={navbar.boxGrow} />
                    <Box sx={navbar.links}>
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                        >
                            <StyledRoute to="/home">Films</StyledRoute>
                        </Typography>

                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={navbar.favorites}
                        >
                            <StyledRoute to="/favorites">Favorites</StyledRoute>
                        </Typography>

                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={navbar.username}

                        >
                            Hello, {login}!
                        </Typography>
                        <Button
                            onClick={handleClick}
                            type="button"
                            variant="contained"
                            color="error"
                        >
                            Sign Out
                        </Button>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
}