import { LoginGroup, LoginTitle, LoginInput , LoginDivInput , LoginEntry} from "./style"
export default function Login() {
    return (
        <LoginGroup>
            <LoginTitle>T3CH-STORE</LoginTitle>
            <LoginDivInput>
                <LoginInput type="text" placeholder="E-mail" ></LoginInput>
                <LoginInput type="text" placeholder="Password" ></LoginInput>
            </LoginDivInput>
            <button><LoginEntry>Entrar</LoginEntry></button>
        </LoginGroup>
    )
}