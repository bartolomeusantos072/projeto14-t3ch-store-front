import styled from "styled-components";
import { Link } from 'react-router-dom';
import { RegisterGroup, RegisterTitle, RegisterInput,RegisterDivInput, RegisterSpan } from "./style.js"


export default function Register() {
    return (
        <RegisterGroup>
            <RegisterTitle>T3CH STORE</RegisterTitle>
            <RegisterDivInput>
                <RegisterInput type="text" placeholder="nome"></RegisterInput>
                <RegisterInput type="text" placeholder="email"></RegisterInput>
                <RegisterInput type="text" placeholder="senha"></RegisterInput>
                <RegisterInput type="text" placeholder="confirmar senha"></RegisterInput>
            </RegisterDivInput>
            <button type="submit" ><RegisterSpan>Cadastrar</RegisterSpan></button>
            <StyledLink to={"/"}>
                <h4>Primeira vez? Cadastre-se!</h4>
            </StyledLink>
        </RegisterGroup>
    )
}
const StyledLink = styled(Link)`
    font-family: 'Raleway', sans-serif;
    text-decoration: none;
    color: #ffffff;
    font-weight: 700;
    font-size: 15px;
    line-height: 18px;
    text-align: center;
    margin-top: 5%;
`;