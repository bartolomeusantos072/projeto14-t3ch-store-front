import Header from "./shared/Header";
import Main from "./shared/Main";
import MenuFooter from "./shared/MenuFooter";
import styled from "styled-components";

export default function FinalizationPage () {

    return (
        <>
            <Header />
            <StyledMain>
                <Message>Pedito feito com sucesso!!!</Message>
            </StyledMain>
            <MenuFooter />
        </>
    )
};

const Message = styled.div`
    width: 350px;

    font-family: 'Roboto';
    font-size: 26px;
    font-weight: bold;
    color: #00FF7A;
`;

const StyledMain = styled(Main)`
    display: flex;
    justify-content: center;
    align-items: center;
`;