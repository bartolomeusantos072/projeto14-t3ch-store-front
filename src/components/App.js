import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalStyles from '../assets/styles/GlobalStyles'
import HomeProducts from './HomeProducts';

export default function App () {

    return (
        <>
            <GlobalStyles />
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<HomeProducts />} />
                </Routes>
            </BrowserRouter>
        </>
    )
};