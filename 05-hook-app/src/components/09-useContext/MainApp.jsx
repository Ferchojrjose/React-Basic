import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { HomePage } from './HomePage'
import { AboutPage } from './AboutPage'
import { LogInPage } from './LogInPage'
import { NavBar } from './NavBar';
import { UserProvider } from './context/UserProvider';

export const MainApp = () => {
    return (
        <>
            <UserProvider>
                <NavBar />
                <hr />

                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="about" element={<AboutPage />} />
                    <Route path="login" element={<LogInPage />} />
                    {/* <Route path="/*" element={ <LogInPage />} /> */}
                    <Route path="/*" element={<Navigate to="/about" />} />

                </Routes>

            </UserProvider>
        </>
    )
}
