import styled from "styled-components";
import { IoCartOutline } from 'react-icons/io5'
import Button from './shared/Button'

export default function Product ({ image, name, price, id }) {

    return (
        <Container>
            <ProductImage src={image}/>
            <ProductName>{name}</ProductName>
            <Price>R$ {price}</Price>
            <ButtonsContainer>
                <Button id={id} >Comprar</Button>
                <CartIcon id={id} />
            </ButtonsContainer>
        </Container>
    );
};

const ProductImage = styled.img`
    width: 170px;
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
    color: #000000;
    word-wrap: break-word;
`;

const Price = styled.div`
    font-family: 'Exo 2';
    font-size: 22px;
    font-weight: bold;
    color: #000000;

    margin: 10px 0;
`;

const ContentContainer = styled.div`
    width: 100%;
    height: calc(100% - 36px);
    background-color: #FFFFFF;

    margin-bottom: 5px;
`;

const CartIcon = styled(IoCartOutline)`
    font-size: 35px;
    color: #0E1A1E;
    margin: 0 auto;
`;

const ButtonsContainer = styled.div`
    display: flex;
    align-items: center;

    width: 100%;
    height: 36px;
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