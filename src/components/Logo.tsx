// libs
import * as React from 'react';

// images
import logo from '../dist/img/logo.png';


export const Logo = () => {
    return(
        <>
            <img
                src={logo}
                alt="logo"
                height="45"
            />
        </>
    );
}