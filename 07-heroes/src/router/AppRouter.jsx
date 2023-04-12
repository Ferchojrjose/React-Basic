import { Navigate, Route, Routes } from "react-router-dom"
import { Marvel } from "../heroes/pages/Marvel"
import { Dc } from "../heroes/pages/Dc"
import { Login } from "../auth/pages/Login"
import { Navbar } from "../heroes/components/Navbar"

export const AppRouter = () => {
    /*
    ========================
    NAVEGACIÓN ENTRE PÁGINAS
    =========================
    */
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="marvel" element={<Marvel />} />
                <Route path="dc" element={<Dc />} />
                <Route path="login" element={<Login />} />
                <Route path="/" element={<Navigate to="/marvel" />} />
            </Routes>
        </>
    )
}
