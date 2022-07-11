import styled from "styled-components";

export default function cartProduct ({ url, name, price, amount }) {

    return (
        <Container>
            
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

const Image = styled.img`
    width: 170px;
    height: 100%;
`;