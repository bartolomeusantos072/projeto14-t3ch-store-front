import styled from "styled-components"
import { IoCartOutline, IoPersonOutline, IoHomeOutline } from 'react-icons/io5'

export default function MenuFooter () {

    return (
        <Container>
            <StyledHome />
            <StyledPerson />
            <StyledCart />
        </Container>
    )
};

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100vw;
    height: 55px;
    padding: 0 25px;
    background-color: #012026;

    position: fixed;
    bottom: 0;
    z-index: 1;
`;

const StyledCart = styled(IoCartOutline)`
    font-size: 30px;
    color: #00FF7A;
`;

const StyledPerson = styled(IoPersonOutline)`
    font-size: 30px;
    color: #00FF7A;
`;

const StyledHome = styled(IoHomeOutline)`
    font-size: 30px;
    color: #00FF7A;
`;