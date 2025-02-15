import { useContext } from "react";
import { AuthContext } from "../auth";
import { Navigate } from "react-router";


export const PublicRouter = ({ children }) => {

    const { logged } = useContext(AuthContext) // * Obtenemos el estado de logged para saber si el usuario está autenticado


    return (!logged) ? children : <Navigate to="/marvel" /> // * Si el usuario no está autenticado, retornamos el children, en caso contrario, retornamos null



}
