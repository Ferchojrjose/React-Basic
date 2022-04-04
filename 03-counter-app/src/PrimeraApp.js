//Trabajar con Functional Componnents
import React from 'react';
import PropTypes from 'prop-types';


function PrimeraApp( { saludo, subtitulo}) {

 
    // const saludo = {
    //     nombre: 'Fernando',
    //     edad: 23
    // }

    return (
        //Fragmento <>
        <>
            <h1> {saludo} </h1>
            {/* <pre> {JSON.stringify(saludo, null, 3)} </pre> */}
            <p>{subtitulo}</p>

        </>
    );
}


PrimeraApp.prototype = {

    saludo: PropTypes.string.isRequired

}

PrimeraApp.defaultProps = {

    subtitulo: 'soy un subtitulo'

}

export default PrimeraApp;