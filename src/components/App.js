import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalStyles from '../assets/styles/GlobalStyles'
import Login from './pages/login';
export default function App () {

    return (
        <>
            <GlobalStyles />
            <BrowserRouter>
                <Routes>
                <Route  path="/" element={<Login />} />
                </Routes>
            </BrowserRouter>
        </>
    )
};