import styled from "styled-components";
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import { useState  } from "react";
import swal from 'sweetalert';

import { RegisterGroup, RegisterTitle, RegisterInput, RegisterDivInput, RegisterSpan } from "./style.js"


export default function Register() {
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
    })
   
    const [error , setError] = useState("")
    
    const navigate = useNavigate()

    async function creatUser(e) {
        e.preventDefault();
        const body = {
            "username": user.name,
            "email": user.email,
            "password":user.password,
            "confirmPassword": user.confirmPassword
        };

        try {
             await axios.post('http://localhost:5009/sign-up', body);
            navigate("/")
           

        } catch (error) {
            console.log(error)
            setError(error.response.data)
           swal(error.response.data , "preencha corretamente" , "error") 
        }
    }


 
    return (
        <RegisterGroup>
            <RegisterTitle>T3CH STORE</RegisterTitle>
            <RegisterDivInput>
                <RegisterInput
                    type="text"
                    placeholder="Nome"
                    value={user.name}
                    cor={error? "#FFDAB9" : "#FFFAF0"}
                    onChange={e => { setUser({ ...user, name: e.target.value }) }}>
                </RegisterInput>

                <RegisterInput
                    type="text"
                    placeholder="Email"
                    value={user.email}
                    cor={error? "#FFDAB9" : "#FFFAF0"}
                    onChange={e => { setUser({ ...user, email: e.target.value }) }}>
                </RegisterInput>

                <RegisterInput
                    type="text"
                    placeholder="Senha"
                    value={user.password}
                    cor={error? "#FFDAB9" : "#FFFAF0"}
                    onChange={e => { setUser({ ...user, password: e.target.value }) }}>
                </RegisterInput>

                <RegisterInput
                    type="text"
                    placeholder="confirmar senha"
                    value={user.confirmPassword}
                    cor={error? "#FFDAB9" : "#FFFAF0"}
                    onChange={e => { setUser({ ...user, confirmPassword: e.target.value }) }}>
                </RegisterInput>

            </RegisterDivInput>
            <button type="submit" onClick={creatUser} ><RegisterSpan>Cadastrar</RegisterSpan></button>
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