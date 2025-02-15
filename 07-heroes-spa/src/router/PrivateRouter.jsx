import { useContext } from "react";
import { AuthContext } from "../auth";
import { Navigate, useLocation } from "react-router";


export const PrivateRouter = ({ children }) => {

    const { logged } = useContext(AuthContext) // * Obtenemos el estado de logged para saber si el usuario está autenticado

    return (logged) ? children : <Navigate to="/login" /> // * Si el usuario está autenticado, retornamos el children, en caso contrario, retornamos null
}
