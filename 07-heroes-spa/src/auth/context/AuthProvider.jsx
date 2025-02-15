import { useReducer } from "react";
import { AuthContext } from "./AuthContext";
import { authReducer } from "./authReducer";
import { types } from "../types/types";





//* Función para inicializar el estado
const init = () => {

    const user = JSON.parse(localStorage.getItem('user')); //* Obtenemos el usuario del localstorage

    return { //* Retornamos el estado inicial
        logged: !!user,
        user: user,
    }
}

export const AuthProvider = ({ children }) => {


    const [state, dispatch] = useReducer(authReducer, {}, init);


    //* Función para hacer login
    const login = (name = '') => {

        const action = {
            type: types.login,
            payload: {
                id: 12345,
                name: name,
            }
        }

        localStorage.setItem('user', JSON.stringify(action.payload)); //* Guardamos el usuario en el localstorage

        dispatch(action); //* Accion que se ejecuta en el reducer, para cambiar el estado

    }


    //* Función para hacer logout
    const logout = () => {

        const action = {
            type: types.logout
        }

        localStorage.removeItem('user'); //* Eliminamos el usuario del localstorage

        dispatch(action); //* Accion que se ejecuta en el reducer, para cambiar el estado
    }


    //* Retornamos el contexto con el estado y las funciones
    return (
        <AuthContext.Provider value={{ ...state, login: login, logout: logout }}>
            {children}
        </AuthContext.Provider>
    )

}
