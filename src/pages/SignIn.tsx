import * as yup from 'yup';
import * as React from 'react';
import { useFormik, FormikProps } from 'formik';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux';
import { resetState, signIn } from '../redux/store/action-creators/actions';
import { IUser, Result } from '../redux/store/interfaces';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import CssBaseline from '@mui/material/CssBaseline';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import logo from '../dist/img/logo.png';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { Modal } from '@mui/material';
import { FormEvent } from 'react';
import { button, containerBox, containerGrid,
    formBox, mainGrid, modal, pageGrid } from '../dist/style/SignIn/SignInStyle';


const validationSchema = yup.object({
    data: yup.object({
        login: yup
            .string()
            .min(4, 'Username should be of minimum 4 characters length')
            .required('Username is required'),
        password: yup
            .string()
            .min(6, 'Password should be of minimum 6 characters length')
            .required('Password is required')
    })
});

const theme = createTheme();

export const SignIn = () => {
    const dispatch = useDispatch();
    const authResult = useTypedSelector(state => state.authResult);

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        formik.handleSubmit(e);
    }

    const handleClose = () => {
        dispatch(resetState());
    }

    const formik: FormikProps<Result<IUser>> = useFormik<Result<IUser>>({
        initialValues: {
            data: {
                login: '',
                password: '',
            },
            error: ''
        },
        validationSchema: validationSchema,
        onSubmit: (result) => {
            dispatch(signIn(result.data));
        },
    });

    return (
        <>
            <ThemeProvider theme={theme}>
                <Grid container component="main" sx={mainGrid}>
                    <CssBaseline />
                    <Grid
                        item
                        xs={false}
                        sm={4}
                        md={7}
                        sx={pageGrid}
                    />
                    <Grid
                        xs={12}
                        sm={8}
                        md={5}
                        component={Paper}
                        sx={containerGrid}
                        square
                    >
                        <Box sx={containerBox}>
                            <img
                                src={logo}
                                alt="logo"
                                height="45"
                            />

                            <Box sx={formBox}>
                                <form onSubmit={handleSubmit}>
                                    <TextField
                                        fullWidth
                                        type="text"
                                        name="data.login"
                                        label="Username"
                                        color="error"
                                        margin="normal"
                                        value={formik.values.data.login}
                                        onChange={formik.handleChange}
                                        error={formik.touched.data?.login && Boolean(formik.errors.data?.login)}
                                        helperText={formik.touched.data?.login && formik.errors.data?.login}
                                    />

                                    <TextField
                                        fullWidth
                                        type="password"
                                        name="data.password"
                                        label="Password"
                                        color="error"
                                        margin="normal"
                                        value={formik.values.data.password}
                                        onChange={formik.handleChange}
                                        error={formik.touched.data?.password && Boolean(formik.errors.data?.password)}
                                        helperText={formik.touched.data?.password && formik.errors.data?.password}
                                    />

                                    <Button
                                        fullWidth
                                        type="submit"
                                        variant="contained"
                                        color="error"
                                        sx={button}
                                    >
                                        Sign In
                                    </Button>
                                </form>

                                <Modal
                                    open={authResult.error !== ''}
                                    onClose={handleClose}
                                >
                                    <Box sx={modal}>
                                        {authResult.error}
                                    </Box>
                                </Modal>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </ThemeProvider>
        </>
    );
}