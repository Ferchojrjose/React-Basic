import React, { useState } from 'react';
import PropTypes from 'prop-types';


function CounterApp({ value }) {

    const [counter, setCounter] = useState(value); //[valor, metodo]


    function incremento() {
        setCounter(counter + 1);
    }

    function decremento() {

        if (counter === 0) {
            setCounter(counter);
        } else {

            setCounter(counter - 1);
        }

    }

    function reset() {
        setCounter(value);
    }

    return (

        <>
            <h1> CounterApp </h1>
            <h2> {counter} </h2>
            <button onClick={incremento}> +1 </button>
            <button onClick={reset}> Reset </button>
            <button onClick={decremento}> -1 </button>

        </>

    );

}

CounterApp.prototype = {

    value: PropTypes.number

}

export default CounterApp;
