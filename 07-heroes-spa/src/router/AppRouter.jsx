import { Route, Routes } from "react-router";

import { Login } from "../auth";
import { HeroesRoutes } from "../heroes";




//* Router principal de la aplicación
export const AppRouter = () => {

    //* ** Definimos las rutas de la aplicación **

    return (
        <>
            {/* Componente Routes */}
            <Routes>
                <Route path="login" element={<Login />} />

                <Route path="/*" element={<HeroesRoutes />} />
            </Routes>

        </>
    )
}
