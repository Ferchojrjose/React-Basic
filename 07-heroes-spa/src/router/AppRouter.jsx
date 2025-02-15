import { Route, Routes } from "react-router";

import { Login } from "../auth";
import { HeroesRoutes } from "../heroes";
import { PrivateRouter } from "./PrivateRouter";
import { PublicRouter } from "./PublicRouter";




//* Router principal de la aplicación
export const AppRouter = () => {

    //* ** Definimos las rutas de la aplicación **

    return (
        <>
            {/* Ruta Publicas */}
            <Routes>

                <Route path="/login"
                    element={
                        <PublicRouter>
                            <Login />
                        </PublicRouter>
                    }
                />


                {/* Rutas Protegidas */}
                <Route path="/*"
                    element={
                        <PrivateRouter>
                            <HeroesRoutes />
                        </PrivateRouter>
                    }
                />

            </Routes>

        </>
    )
}
