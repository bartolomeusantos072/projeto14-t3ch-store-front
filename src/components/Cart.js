import Main from "./shared/Main"
import MenuFooter from "./shared/MenuFooter"
import Header from "./shared/Header"
import CartProduct from "./CartProduct"
import { useEffect, useContext, useState } from "react"
import axios from "axios"
import TokenContext from "../contexts/TokenContext"
import Button from "./shared/Button"
import styled from "styled-components"

export default function Cart () {

    const [cartProducts, setCartProducts] = useState([]);
    const { token } = useContext(TokenContext);

    function calcTotalPrice () {

        let total = 0
        cartProducts.forEach( product => {
            let price = product.price;
            let amount = product.amount;
            price = price.replace(',', '.');
            total += Number(price) * amount;
            console.log(total)
        });
        return total
    };

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
            setCartProducts([...response.data]);
        });

    }, []);

    return (
        <>
            <Header />
            <StyledMain>
                { cartProducts.map( (product,index) => (
                    <CartProduct 
                        key={index}
                        name={product.name}
                        url={product.url}
                        price={product.price}
                        amount={product.amount}
                    />
                ))}
                <PlaceOrder>
                    <SubTotal>Subtotal: R$ {cartProducts.length ? `${calcTotalPrice ()},00` : 0}</SubTotal>
                    <Button>Finalizar pedido</Button>
                </PlaceOrder>
            </StyledMain>
            <MenuFooter />
        </>
    );
};

const StyledMain = styled(Main)`
    padding-top: 15px;
`;

const PlaceOrder = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: calc(100% - 50px);
    height: 100px;
    padding: 5px;
    border-radius: 10px;

    background-color: #FFFFFF;

    position: absolute;
    bottom: 15px;
`;

const SubTotal = styled.div`
    font-family: 'Exo 2';
    font-size: 22px;
    font-weight: bold;
    color: #012026;
`;