import styled from "styled-components";
import { IoCartOutline } from 'react-icons/io5'
import Button from './shared/Button'
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { useContext } from "react";
import CartContext from "../contexts/cartContext";

export default function Product ({ url, name, price, id }) {

    const navigate = useNavigate();
    const { cartLength, setCartLength } = useContext(CartContext);

    function addToCart (e) {

        e.stopPropagation();

        const API_URI = 'http://localhost:5009';
        const ROUTE = '/cart';

        const body = {
            url,
            name, 
            price,
            productId: id,
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
        <Container onClick={ () => navigate(`/product/${id}`)}>
            <ProductImage src={url}/>
            <ProductName>{name}</ProductName>
            <Price>R$ {price}</Price>
            <ButtonsContainer>
                <Button onClick={ buy } >Comprar</Button>
                <CartIcon onClick={ addToCart } />
                <Add>+</Add>
            </ButtonsContainer>
        </Container>
    );
};

const Add = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;

    width: 14px;
    height: 14px;
    border-radius: 50%;
    background-color: #0E1A1E;

    font-size: 14px;
    font-weight: bold;
    color: #FFFFFF;

    position: absolute;
    top: 4px;
    right: 19px;
`;

const ProductImage = styled.img`
    width: 100%;
    height: 110px;
    object-fit: cover;
    background-color: #FFFFFF;
`;

const ProductName = styled.div`

    width: 100%;
    margin-top: 10px;
    margin-bottom: auto;

    font-family: 'Roboto';
    font-size: 16px;
    font-weight: bold;
    vertical-align: top;
    color: #012026;
    word-wrap: break-word;
`;

const Price = styled.div`
    font-family: 'Exo 2';
    font-size: 22px;
    font-weight: bold;
    color: #012026;

    margin: 10px 0;
`;

const CartIcon = styled(IoCartOutline)`
    font-size: 35px;
    color: #0E1A1E;
    margin: 0 auto;
    cursor: pointer;

    position: relative;
`;

const ButtonsContainer = styled.div`
    display: flex;
    align-items: center;

    width: 100%;
    height: 36px;

    position: relative;
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 180px;
    height: 240px;
    padding: 5px;
    margin-top: 15px;
    border-radius: 5px;
    background-color: #FFF;
`;