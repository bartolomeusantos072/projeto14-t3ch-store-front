import styled from "styled-components"
import { IoCartOutline, IoPersonOutline, IoHomeOutline } from 'react-icons/io5'
import { useNavigate } from 'react-router-dom';
import { useState, useContext } from "react";
import CartContext from "../../contexts/cartContext";

export default function MenuFooter () {

    const navigate = useNavigate();
    const [buttonStatus, setButtonStatus] = useState([true, false, false]);
    const { cartLength } = useContext(CartContext);
    
    return (
        <Container>
            <ActiveButton active={buttonStatus[0]} >
                <StyledHome onClick={ () => {
                    navigate('/home');
                    setButtonStatus([true, false, false]);
                }}/>
            </ActiveButton>
            <ActiveButton active={buttonStatus[1]} >
                <StyledPerson onClick={ () => {
                    navigate(''); // Alterar a rota para a rota do perfil do usuário.
                    setButtonStatus([false, true, false]);
                }}/>
            </ActiveButton>
            <ActiveButton active={buttonStatus[2]} >
                <StyledCart onClick={ () => {
                    navigate(''); // Alterar a rota para a rota de finalização da compra.
                    setButtonStatus([false, false, true]);
                }}/>
                <Count>{cartLength}</Count>
            </ActiveButton>
        </Container>
    );
};

const Count = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;

    width: 14px;
    height: 14px;
    border-radius: 50%;
    background-color: #00FF7A;

    font-size: 10px;
    font-weight: bold;
    color: #012026;

    position: absolute;
    top: 10px;
    right: 10px;
`;

const ActiveButton = styled.div`
    height: 100%;
    padding: 10px 10px 0 10px;
    border-top: ${props => props.active ? '5px' : 0} solid #00FF7A;

    position: relative;
`;

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
    cursor: pointer;
`;

const StyledPerson = styled(IoPersonOutline)`
    font-size: 30px;
    color: #00FF7A;
    cursor: pointer;
`;

const StyledHome = styled(IoHomeOutline)`
    font-size: 30px;
    color: #00FF7A;
    cursor: pointer;
`;