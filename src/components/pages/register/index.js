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
        </RegisterGroup>
    )
}