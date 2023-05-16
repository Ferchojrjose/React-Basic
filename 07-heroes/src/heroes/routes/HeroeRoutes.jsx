import { Navigate, Route, Routes } from "react-router-dom";

import { Navbar } from '../components';
import { Marvel, Dc, Hero, Search } from '../pages';


export const HeroeRoutes = () => {
    return (
        <>
            <Navbar />

            <div className="container">
                <Routes>
                    <Route path="marvel" element={<Marvel />} />
                    <Route path="dc" element={<Dc />} />
                    <Route path="search" element={<Search />} />
                    <Route path="hero/:id" element={<Hero />} />
                    <Route path="/" element={<Navigate to="/marvel" />} />
                </Routes>
            </div>
        </>
    )
}
