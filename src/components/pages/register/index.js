import styled from "styled-components";
import { Link } from 'react-router-dom';
import { useState } from "react";
import { RegisterGroup, RegisterTitle, RegisterInput, RegisterDivInput, RegisterSpan } from "./style.js"


export default function Register() {
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
    })
    console.log(user.name)
    return (
        <RegisterGroup>
            <RegisterTitle>T3CH STORE</RegisterTitle>
            <RegisterDivInput>
                <RegisterInput
                    type="text"
                    placeholder="Nome"
                    value={user.name}
                    onChange={e => { setUser({ ...user, name: e.target.value }) }}>
                </RegisterInput>

                <RegisterInput
                    type="text"
                    placeholder="Email"
                    value={user.email}
                    onChange={e => { setUser({ ...user, email: e.target.value }) }}>
                </RegisterInput>

                <RegisterInput
                    type="text"
                    placeholder="Senha"
                    value={user.password}
                    onChange={e => { setUser({ ...user, password: e.target.value }) }}>
                </RegisterInput>

                <RegisterInput
                    type="text"
                    placeholder="confirmar senha"
                    value={user.confirmPassword}
                    onChange={e => { setUser({ ...user, confirmPassword: e.target.value }) }}>
                </RegisterInput>

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