import styled from "styled-components"

export default function Header () {

    return (
        <Container>
            <Logo>T3CH STORE</Logo>
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    align-items: center;

    width: 100vw;
    height: 70px;
    padding: 0 25px;

    background-color: #012026;
`;

const Logo = styled.div`
    
    font-family: 'Saira Stencil One';
    font-size: 34px;
    color: #00FF7A;
`;

