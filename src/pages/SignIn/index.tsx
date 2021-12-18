import { FormEvent, useState } from "react";

import {useNavigate} from "react-router-dom";

import {toast} from "react-toastify";

import Api from "../../services/axios";

import {login} from "../../services/auth";

import {
    Wrapper,
    SidePanel,
    LoginPanel,
    LoginContainer,
    ButtonContainer,
    NavigateButton
} from "./styles";

import Button from "../../components/Button";
import Input from "../../components/Input";

import Friends from "../../assets/images/friends.jpg";
import Logo from "../../assets/images/logo.svg";

function SignIn(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    async function handleSubmit(e:FormEvent<HTMLFormElement>){
        e.preventDefault();

        setLoading(true);

        try {
            const {data} = await Api.post("/user/signin", {email, password});

            login(data.acessToken);

            navigate("/dashboard");
        } catch (error) {
            toast.error('Usuário não encontrado!', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                closeButton: false,
            });

            toast.clearWaitingQueue();
        }

        setLoading(false);
    }

    return (
        <Wrapper>
            <SidePanel image={Friends}/>
            <LoginPanel>
                <LoginContainer onSubmit={handleSubmit}>
                    <img src={Logo} alt="" />
                    <Input placeholder="Email" type="email" required value={email} onChange={(data) => setEmail(data.target.value)}/>
                    <Input placeholder="Senha" type="password" required value={password} onChange={(data) => setPassword(data.target.value)}/>
                    <ButtonContainer>
                        <Button type="submit" loading={loading}>ENTRAR</Button>
                    </ButtonContainer>
                    <p>Ainda não tem cadastro? <NavigateButton to="/signup">Cadastre-se já</NavigateButton></p>
                </LoginContainer>
            </LoginPanel>
        </Wrapper>
    );
}

export default SignIn;