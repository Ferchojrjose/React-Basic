import React from 'react';
import { useRef } from 'react';

export const FocusScreen = () => {

    const inputRef = useRef();

    const focusClick = ()=> {

        inputRef.current.select();
    }

    return (
        <>
            <h1> Focus Screen</h1>
            <hr />

            <input
                ref={inputRef}
                type="text"
                placeholder="Nombre"
                className='form-control'
            />

            <button onClick={focusClick} className='btn btn-primary mt-2'>
                Focus
            </button>
        </>
    )
}
