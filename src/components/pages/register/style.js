import styled from "styled-components"


const RegisterGroup = styled.div`
display: flex;
flex-direction: column;
background-color: #012026;
width: 100vw;
height: 100vh;
justify-content: center;
align-items: center;
button{
         margin-top: 15px;
         background-color:  #12292F;
         border-style: none;
         width:  289px;
         height: 46px;
         margin-top: 5%;
         display: flex;
         justify-content: center;
         align-items: center;
         border-radius: 5%;
         
}

`

const RegisterTitle = styled.h1`
font-family: "Saira Stencil One";
color: #00FF7A;
font-size: 36px;


`

const RegisterInput = styled.input`
width: 326px;
height: 48px;
margin-top: 4.7%;
border-radius: 5%;
background-color: ${props => props.cor};  
border-style: none;
::placeholder{
color:#12292F ;
font-family:"Exo 2, sans-serif" ;
margin-left: 5%;
font-size: 15px;
}

`
const RegisterDivInput = styled.div`
display: flex;
flex-direction: column;
margin-top: 10%;

`

const RegisterSpan = styled.h1`
color: #00FF7A;
font-size:20px;
font-family: "Exo 2, sans-serif";
`




export{
    RegisterGroup,
    RegisterTitle,
    RegisterInput,
    RegisterDivInput,
    RegisterSpan
}