import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import GlobalStyles from '../assets/styles/GlobalStyles'
import TokenContext from '../contexts/TokenContext';
import Login from './pages/login';
export default function App() {
    const [token , setToken] = useState("")

    return (
        <>
            <TokenContext.Provider value={{token , setToken}}>
                <GlobalStyles />
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Login />} />
                    </Routes>
                </BrowserRouter>
            </TokenContext.Provider>
        </>
    )
};