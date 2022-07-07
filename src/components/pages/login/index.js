import { useState } from 'react';
import axios from 'axios';
import styled from "styled-components";
import { Link } from 'react-router-dom';
import { LoginGroup, LoginTitle, LoginInput, LoginDivInput, LoginEntry } from "./style"
import { useContext } from 'react';
import TokenContext from '../../../contexts/TokenContext';


export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { setToken } = useContext(TokenContext)

    async function sendLogin(e) {
        e.preventDefault();
        const body = { email, password };
        try {
            const { data } = await axios.post('http://localhost:5009/sign-in', body);
            console.log(data)
            setToken(data.token)

        } catch (error) {
            console.error('Deu erro ao fazer o login');
        }
    }

    return (
        <LoginGroup>
            <LoginTitle>T3CH STORE</LoginTitle>
            <LoginDivInput>
                <LoginInput
                    type="text"
                    placeholder="E-mail"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                ></LoginInput>
                <LoginInput
                    type="text"
                    placeholder="Password"
                    value={password}
                    onChange={e => setPassword(e.target.value)} >
                </LoginInput>
            </LoginDivInput>
            <button type="submit" onClick={sendLogin}><LoginEntry>Entrar</LoginEntry></button>
            <StyledLink to={"/register"}>
                <h4>Primeira vez? Cadastre-se!</h4>
            </StyledLink>
        </LoginGroup>
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