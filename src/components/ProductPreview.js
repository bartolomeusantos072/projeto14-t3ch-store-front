import styled from "styled-components";
import Main from "./shared/Main";
import Header from "./shared/Header";
import MenuFooter from "./shared/MenuFooter";
import Button from "./shared/Button";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import axios from 'axios';
import CartContext from "../contexts/cartContext";

export default function ProductPreview () {

    const { productId } = useParams();
    const [productInf, setProductInf] = useState({});
    const { cartLength, setCartLength } = useContext(CartContext)
    const navigate = useNavigate();

    useEffect( () => {
        
        const API_URI = 'http://localhost:5009';
        const ROUTE = `/products/${productId}`;

        const promise = axios.get(`${API_URI}${ROUTE}`);
        promise.then( response => {
            setProductInf(response.data);
        });

    }, [setProductInf]);

    const { url, name, price, description, _id } = productInf;

    function addToCart (e) {

        e.stopPropagation();

        const API_URI = 'http://localhost:5009';
        const ROUTE = '/cart';

        const body = {
            url,
            name, 
            price,
            productId: _id,
            amount: 1
        };

        const header = {
            headers: {
                Authorization: `Bearer ${''}`
            }
        };
        
        const promise = axios.post(`${API_URI}${ROUTE}`, body, header);
        promise.then( () => {
            setCartLength( () => cartLength + 1);
        });
        promise.catch( () => alert('Erro ao adicionar o produto ao carrinho!'));
    };

    async function buy(e) {
        
        e.stopPropagation();

        await addToCart(e);

        navigate(''); // Alterar a rota para a rota de finalização da compra.

    };

    return (
        <>
            <Header />
            <Main>
                <ProductImage src={url} />
                <ProductName>{name}</ProductName>
                <Price>R$ ${price}</Price>
                <ModButton onClick={ buy } >Comprar agora</ModButton>
                <ModButton onClick={ addToCart } >Adicionar ao carrinho</ModButton>
                <Description>{description}</Description>
            </Main>
            <MenuFooter />
        </>
    );
};

const ModButton = styled(Button)`
    background-color: #00FF7A;
    height: 40px;
    margin-bottom: 15px;
    font-size: 18px;
    color: #0E1A1E;
`;

const ProductImage = styled.img`
    width: 100%;
    height: 284px;
    margin-top: 15px;
    border-radius: 10px;
    object-fit: cover;
    background-color: #FFFFFF;
`;

const ProductName = styled.div`

    width: 100%;
    margin-top: 25px;
    margin-bottom: auto;

    font-family: 'Roboto';
    font-size: 22px;
    line-height: 28px;
    font-weight: bold;
    color: #FFFFFF;
    word-wrap: break-word;
`;

const Price = styled.div`
    font-family: 'Exo 2';
    font-size: 28px;
    font-weight: bold;
    color: #FFFFFF;

    margin: 30px 0;
`;

const Description = styled.div`

    width: 100%;
    margin-top: 40px;
    font-family: 'Roboto';
    font-size: 16px;
    line-height: 20px;
    color: #FFFFFF;
    word-wrap: break-word;
    
`;