import { Navigate, Route, Routes } from "react-router";
import { Navbar } from "../../navbar"
import { Marvel, DC, Search, Hero } from "../pages";



//* Router del módulo de Héroes
export const HeroesRoutes = () => {


    return (
        <>

            {/* Componente Navbar */}
            <Navbar />

            <div className="container">
                {/* Componente Routes */}
                <Routes>
                    <Route path="marvel" element={<Marvel />} />
                    <Route path="dc" element={<DC />} />
                    <Route path="search" element={<Search />} />
                    <Route path="hero/:id" element={<Hero />} />

                    {/* Redirección por defecto */}
                    <Route path="/" element={<Navigate to="/marvel" />} />

                </Routes>
            </div>

        </>
    )
}
