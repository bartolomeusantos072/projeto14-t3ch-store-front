import styled from "styled-components"

const LoginGroup = styled.div`
display: flex;
flex-direction: column;
background-color: #012026;
width: 100vw;
height: 100vh;
padding-top: 57%;
align-items: center;

`

const LoginTitle = styled.h1`
font-family: "Saira Stencil One";
color: #00FF7A;
font-size: 36px;
margin-bottom: 5%;
`

const LoginInput = styled.input`
width: 326px;
height: 58px;
margin-top: 5%;
border-radius: 5%;

`
const LoginDivInput = styled.div`
display: flex;
flex-direction: column;



`
export{
    LoginGroup,
    LoginTitle,
    LoginInput,
    LoginDivInput

}