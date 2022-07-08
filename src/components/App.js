import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalStyles from '../assets/styles/GlobalStyles'
import HomeProducts from './HomeProducts';
import ProductPreview from './ProductPreview';

export default function App () {

    return (
        <>
            <GlobalStyles />
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={ <HomeProducts /> } />
                    <Route path='product/:productId' element={ <ProductPreview /> } />
                </Routes>
            </BrowserRouter>
        </>
    )
};