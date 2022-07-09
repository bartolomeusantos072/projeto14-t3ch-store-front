import MenuFooter from "./shared/MenuFooter";
import Main from "./shared/Main";
import Header from "./shared/Header";
import styled from "styled-components";
import Product from "./Product";
import axios from 'axios';
import { useState, useEffect } from 'react';

export default function HomeProducts () {

    const [products, setProducts] = useState([]);

    const API_URI = 'http://localhost:5009';
    const ROUTE = '/products';

    useEffect( () => {
        const promise = axios.get(`${API_URI}${ROUTE}`);
        promise.then( response => {
            setProducts(response.data);
        });
    }, [setProducts]);

    return (
        <>
            <Header />
            <HomeMain>
                {products.map( (product, index) => (
                    <Product 
                        key={index} 
                        url={product.url} 
                        name={product.name} 
                        price={product.price} 
                        id={product._id}
                    />
                ))}
            </HomeMain>
            <MenuFooter />
        </>
    );
};

const HomeMain = styled(Main)`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 15px;
    
    overflow-y: scroll;
`;