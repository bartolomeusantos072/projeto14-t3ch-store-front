import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import GlobalStyles from '../assets/styles/GlobalStyles'
import HomeProducts from './HomeProducts';
import ProductPreview from './ProductPreview';
import TokenContext from '../contexts/TokenContext';
import Login from './pages/login';
import Register from './pages/register';
import IdContext from '../contexts/IdContext';
import CartContext from '../contexts/cartContext';
import Cart from './Cart';

export default function App() {

    const [token, setToken] = useState("")
    const [userId, setUserId] = useState("")
    const [cartLength, setCartLength] = useState(0);

    return (
        <>
            <TokenContext.Provider value={{ token, setToken }}>
                <IdContext.Provider value={{ userId, setUserId }}>
                    <CartContext.Provider value={{ cartLength, setCartLength }} >

                        <GlobalStyles />
                        <BrowserRouter>
                            <Routes>
                                <Route path="/" element={<Login />} />
                                <Route path="/register" element={<Register />} />
                                <Route path='/home' element={ <HomeProducts /> } />
                                <Route path='product/:productId' element={ <ProductPreview /> } />
                                <Route path='/cart' element={ <Cart />} />
                            </Routes>
                        </BrowserRouter>
                    </CartContext.Provider>
                </IdContext.Provider>
            </TokenContext.Provider>
        </>
    )
};