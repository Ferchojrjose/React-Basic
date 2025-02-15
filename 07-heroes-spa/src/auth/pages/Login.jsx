import { useContext } from "react";
import { useNavigate } from "react-router";
import { AuthContext } from "../context/AuthContext";



export const Login = () => {

    const { login } = useContext(AuthContext); //* Hook de react para consumir el contexto de AuthContext

    const navigate = useNavigate(); //* Hook de react-router-dom


    const handleLogin = () => { //* Función para hacer login

        login('Fernando Serrano'); //* Llamamos a la función login del contexto

        navigate('/', {
            replace: true, //* Reemplaza la ruta actual
        });
    }

    return (
        <div className="container mt-5">
            <h1>Login Page</h1>
            <hr />

            <button
                className="btn btn-primary"
                onClick={handleLogin}>
                Login
            </button>
        </div>
    )
}