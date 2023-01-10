import React, { useContext } from 'react';
import { UseContext } from './context/UseContext';

export const HomePage = () => {

    const {user} = useContext(UseContext);

    return (
        <>
            <h1> Home Page </h1>
            <h4> Bienvenido {user?.nombre} </h4>
            <hr />
        </>
    )
}
