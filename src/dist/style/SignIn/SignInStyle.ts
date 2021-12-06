import bg from '../../img/bg.jpg';

export const modal: any = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    color: 'black',
    transform: 'translate(-50%, -50%)',
    width: '300px',
    height: '25px',
    backgroundColor: 'white',
    textAlign: 'center',
    outline: 'none',
};

export const button: any = {
    mt: 3,
    mb: 2,
};

export const formBox: any = {
    mt: 4,
};

export const containerBox: any = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '500px',
    padding: '20px',
};

export const containerGrid: any = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
};

export const pageGrid: any = {
    backgroundImage: `url(${bg})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
};

export const mainGrid: any = {
    height: '100vh',
};