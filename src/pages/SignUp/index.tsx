import {FormEvent, useState} from "react";

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

import PeopleComputer from "../../assets/images/people-computer.jpg";
import Logo from "../../assets/images/logo.svg";

function SignIn(){
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassoword] = useState("");

    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    async function handleSubmit(e:FormEvent<HTMLFormElement>){
        e.preventDefault();

        if(password !== confirmPassword){
            toast.warning('As senhas não coincidem!', {
                position: "top-left",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                closeButton: false,
            });

            toast.clearWaitingQueue();
        }else{
            setLoading(true);

            try {
                const {data} = await Api.post("/user/signup", {firstName, lastName, email, password});

                login(data.acessToken);

                toast.success('Cadastro realizado com sucesso!', {
                    position: "top-left",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: false,
                    draggable: true,
                    progress: undefined,
                    closeButton: false,
                    onClose: () => navigate("/dashboard"),
                });
            } catch (error) {
                toast.warning('Já existe um usuário cadastrado com esse email!', {
                    position: "top-left",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: false,
                    draggable: true,
                    progress: undefined,
                    closeButton: false,
                });
    
                toast.clearWaitingQueue();

                setLoading(false);
            }
        }
    }

    return (
        <Wrapper>
            <LoginPanel>
                <LoginContainer onSubmit={handleSubmit}>
                    <img src={Logo} alt="" />
                    <Input placeholder="Nome" type="text" required value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
                    <Input placeholder="Sobrenome" type="text" required value={lastName} onChange={(e) => setLastName(e.target.value)}/>
                    <Input placeholder="Email" type="email" required value={email} onChange={(e) => setEmail(e.target.value)}/>
                    <Input placeholder="Senha" type="password" required value={password} onChange={(e) => setPassword(e.target.value)}/>
                    <Input placeholder="Confirmar Senha" type="password" required value={confirmPassword} onChange={(e) => setConfirmPassoword(e.target.value)}/>
                    <ButtonContainer>
                        <Button type="submit" loading={loading}>CADASTRAR</Button>
                    </ButtonContainer>
                    <p>Já tem conta? <NavigateButton to="/">Entre já</NavigateButton></p>
                </LoginContainer>
            </LoginPanel>
            <SidePanel image={PeopleComputer}/>
        </Wrapper>
    );
}

export default SignIn;