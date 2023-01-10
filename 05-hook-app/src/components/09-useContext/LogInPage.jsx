import React, { useContext } from 'react';
import { UseContext } from './context/UseContext';

export const LogInPage = () => {

    const {user, setUser} = useContext(UseContext);

    return (
        <>
            <h1> LogIn Page</h1>
            <hr />

            <pre>
                {JSON.stringify(user, null, 3)}
            </pre>

            <button 
            className="btn btn-primary"
            onClick={()=> setUser({id: 123, nombre: 'Fernando Serrano'})}
            >
                Establecer Usuario
            </button>
        </>
    )
}
