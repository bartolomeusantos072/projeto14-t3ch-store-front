import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import GlobalStyles from '../assets/styles/GlobalStyles'
import HomeProducts from './HomeProducts';
import ProductPreview from './ProductPreview';
import TokenContext from '../contexts/TokenContext';
import Login from './pages/login';
import Register from './pages/register';
import IdContext from '../contexts/IdContext';

export default function App() {

    const [token, setToken] = useState("")
    const [id, setId] = useState("")

    return (
        <>
            <TokenContext.Provider value={{ token, setToken }}>
                <IdContext.Provider value={{ id, setId }}>

                    <GlobalStyles />
                    <BrowserRouter>
                        <Routes>
                            <Route path="/" element={<Login />} />
                            <Route path="/register" element={<Register />} />
                            <Route path='/products' element={ <HomeProducts /> } />
                            <Route path='product/:productId' element={ <ProductPreview /> } />
                            <Route path='/home' element={ <HomeProducts /> } />
                            <Route path='product/:productId' element={ <ProductPreview /> } />
                        </Routes>
                    </BrowserRouter>
                </IdContext.Provider>
            </TokenContext.Provider>
        </>
    )
};