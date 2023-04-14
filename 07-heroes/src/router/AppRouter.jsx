import { Navigate, Route, Routes } from "react-router-dom";

import { Navbar, HeroeRoutes } from "../heroes";
import { Login } from "../auth";


export const AppRouter = () => {
    /*
    ====================
    ROUTES DE NAVEGACION
    ====================
    */
    return (
        <>
            <Routes>
                <Route path="login" element={<Login />} />
                <Route path="/*" element={<HeroeRoutes />} />
            </Routes>
        </>
    )
}
