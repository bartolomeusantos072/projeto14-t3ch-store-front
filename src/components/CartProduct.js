import styled from "styled-components";

export default function cartProduct ({ url, name, price, amount }) {

    return (
        <Container>
        <ProductImage src={url} />
        <Informations>
            <ProductName>{name}</ProductName>
            <Price>R$ {price}</Price>
            <ProductAmount>Quantidade: {amount}</ProductAmount>
        </Informations>
    </Container>
    );
};

const Container = styled.div`
    display: flex;
    width: 100%;
    height: 120px;
    padding: 5px;
    margin-bottom: 15px;
    border-radius: 10px;
    background-color: #FFFFFF;
`;

const Informations = styled.div`
    display: flex;
    flex-direction: column;
    padding-left: 25px;
`;

const ProductImage = styled.img`
    width: 170px;
    height: 100%;
    object-fit: cover;
`;

const ProductName = styled.div`
    width: 100%;
    margin-top: 10px;
    margin-bottom: auto;
    font-family: 'Roboto';
    font-size: 18px;
    font-weight: bold;
    color: #012026;
    word-wrap: break-word;
`;

const Price = styled.div`
    font-family: 'Exo 2';
    font-size: 20px;
    font-weight: bold;
    color: #012026;
    margin: 10px 0;
`;

const ProductAmount = styled.div`
    font-family: 'Roboto';
    font-size: 18px;
    font-weight: bold;
    color: #012026;
    word-wrap: break-word;
`;