import Main from "./shared/Main"
import MenuFooter from "./shared/MenuFooter"
import Header from "./shared/Header"
import CartProduct from "./CartProduct"
import { useEffect, useContext, useState } from "react"
import axios from "axios"
import IdContext from "../contexts/IdContext"

export default function Cart () {

    const [cartProducts, setCartProducts] = useState([]);
    const { userId } = useContext(IdContext);
    console.log(userId)

    useEffect( () => {

        const API_URL = 'http://localhost:5009';
        const ROUTE = '/cart';

        const promise = axios.get(`${API_URL}${ROUTE}`, { userId });
        promise.then( response => {
            console.log(response.data)
            setCartProducts([...response.data]);
    
        });
    }, [userId]);

    const {name, url, price, amount } = cartProducts;

    return (
        <>
            <Header />
            <Main>
                { cartProducts.map( (product,index) => (
                    <CartProduct 
                        key={index}
                        name={name}
                        url={url}
                        price={price}
                        amount={amount}
                    />
                ))}
            </Main>
            <MenuFooter />
        </>
    )
};