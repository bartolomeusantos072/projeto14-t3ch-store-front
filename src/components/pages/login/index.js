import { useState } from 'react';
import axios from 'axios';
import styled from "styled-components";
import { Link , useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import { LoginGroup, LoginTitle, LoginInput, LoginDivInput, LoginEntry } from "./style"
import { useContext } from 'react';
import TokenContext from '../../../contexts/TokenContext';
import IdContext from '../../../contexts/IdContext';


export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error , setError] = useState("")
    const { setToken } = useContext(TokenContext)
    const { setUserId } = useContext(IdContext)
    const navigate = useNavigate()
    async function sendLogin(e) {
        e.preventDefault();
        const body = { email, password };
        try {
            const { data } = await axios.post('http://localhost:5009/sign-in', body);
            setToken(data.token)
            setUserId(data.id)
            navigate("/home")

        } catch (error) {
            setError(error.response.data)
            swal(error.response.data , "preencha corretamente" , "error") 
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
                    cor={error? "#FFDAB9" : "#FFFAF0"}
                    onChange={e => setEmail(e.target.value)}
                ></LoginInput>
                <LoginInput
                    type="password"
                    placeholder="Password"
                    value={password}
                    cor={error? "#FFDAB9" : "#FFFAF0"}
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