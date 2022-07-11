import Main from "./shared/Main"
import MenuFooter from "./shared/MenuFooter"
import Header from "./shared/Header"
import CartProduct from "./CartProduct"
import { useEffect, useContext, useState } from "react"
import axios from "axios"
import TokenContext from "../contexts/TokenContext"

export default function Cart () {

    const [cartProducts, setCartProducts] = useState([]);
    const { token } = useContext(TokenContext);

    //console.log(` ao carregar a tela ${userId}`)
    useEffect( () => {

        const API_URL = 'https://t3ch-store.herokuapp.com';
        const ROUTE = '/cart';

        const header = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        };

        const promise = axios.get(`${API_URL}${ROUTE}`, header);
        promise.then( response => {
            console.log(` dentro da requisição ${[...response.data]}`)
            setCartProducts([...response.data]);
        });

    }, []);

    return (
        <>
            <Header />
            <Main>
                { cartProducts.map( (product,index) => (
                    <CartProduct 
                        key={index}
                        name={product.name}
                        url={product.url}
                        price={product.price}
                        amount={product.amount}
                    />
                ))}
            </Main>
            <MenuFooter />
        </>
    );
};