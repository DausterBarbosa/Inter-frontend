import {useEffect, useState, FormEvent} from "react";

import Axios from "axios";

import {toast} from "react-toastify";

import {formatMoney} from "../../utils/format";
import {formatDate} from "../../utils/formatDate";

import Api from "../../services/axios";

import {MdMoneyOff} from "react-icons/md";
import {BsArrowDownCircle, BsArrowUpCircle} from "react-icons/bs";

import {useNavigate} from "react-router-dom";

import {logout} from "../../services/auth";

import {
    Container,
    Wrapper,
    Header,
    InfoContainer,
    Main,
    BalanceContainer,
    BalanceContainerTitle,
    Balance,
    OperationContainer,
    OperationsContainer,
    OperationPanel,
    OperationPanelTitle,
    InlineContainer,
    ButtonContainer,
    ExtractContainer,
    ExtractContainerTitle,
    NoOperationContainer,
    NoOperationContainerText,
    KeyContainer,
    KeyContainerTitle,
    Operation,
    InlineOperationInfo,
    OperationInfo,
    OperationInfoValue,
    OperationInfoUser,
    OperationDate
} from "./styles";

import Input from "../../components/Input";
import Button from "../../components/Button";

import Logo from "../../assets/images/logo.svg";

interface UserProps{
    accountDigit: number;
    accountNumber: number;
    firstName: string;
    wallet: number;
}

interface TransactionsProps{
    type: string;
    updatedAt: string;
    user: {
        firstname: string;
        lastname: string;
    };
    value: number;
}

function Dashboard(){
    const [user, setUser] = useState<UserProps>();
    const [transactions, setTransactions] = useState<TransactionsProps[]>([]);

    const [value, setValue] = useState("");
    const [valueLoading, setValueLoading] = useState(false);

    const [key, setKey] = useState("");

    const [payKey, setPayKey] = useState("");
    const [payLoading, setPayLoading] = useState(false);

    const navigate = useNavigate();

    function handleLogout(){
        logout();

        navigate("/");
    }

    function handleGenerateKey(e:FormEvent<HTMLFormElement>){
        e.preventDefault();

        setValueLoading(true);

        Api.post("/pix/request", {value})
        .then(({data}) => {
            setValueLoading(false);

            setKey(data.copyPasteKey);
        });
    }

    function handlePay(e:FormEvent<HTMLFormElement>){
        e.preventDefault();
        
        setPayLoading(true);

        Api.post(`/pix/pay/${payKey}`)
        .then(({data}) => {
            toast.success(`${data.message}`, {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                closeButton: false,
            });
        })
        .catch(({response}) => {
            toast.warning(`${response.data.message}`, {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                closeButton: false,
            });
        }).finally(() => {
            setPayLoading(false);
            handleRequest();
            setPayKey("");
        });

        
    }

    async function handleRequest(){
        Axios.all([
            Api.get("/user/me"),
            Api.get("/pix/transactions")
        ])
        .then(Axios.spread((user, transactions) => {
            setUser(user.data);
            setTransactions(transactions.data);
        }))
    }

    useEffect(() => {
        handleRequest();
    }, []);

    return (
        <Container>
            <Wrapper>
                <Header>
                    <img src={Logo} alt="logo" />
                    <InfoContainer>
                        <p>Olá, <strong>{user?.firstName}</strong></p>
                        <strong>{user?.accountNumber}-{user?.accountDigit}</strong>
                        <strong onClick={handleLogout}>Sair</strong>
                    </InfoContainer>
                </Header>
                <Main>
                    <OperationContainer>
                        <BalanceContainer>
                            <BalanceContainerTitle>Saldo Atual</BalanceContainerTitle>
                            <Balance>{formatMoney(Number(user?.wallet))}</Balance>
                        </BalanceContainer>
                        <OperationPanel>
                            <OperationPanelTitle>Receber PIX</OperationPanelTitle>
                            <InlineContainer onSubmit={handleGenerateKey}>
                                <Input placeholder="Valor" type="number" required onChange={(e) => setValue(e.target.value)} value={value}/>
                                <ButtonContainer>
                                    <Button loading={valueLoading} type="submit">Gerar Código</Button>
                                </ButtonContainer>
                            </InlineContainer>
                            {key !== "" && (
                                <KeyContainer>
                                    <KeyContainerTitle>Pix copia e cola</KeyContainerTitle>
                                    <Input value={key}/>
                                </KeyContainer>
                            )}
                        </OperationPanel>
                        <OperationPanel>
                            <OperationPanelTitle>Enviar PIX</OperationPanelTitle>
                            <InlineContainer onSubmit={handlePay}>
                                <Input placeholder="Insira a Chave" type="text" required onChange={(e) => setPayKey(e.target.value)} value={payKey}/>
                                <ButtonContainer>
                                    <Button type="submit" loading={payLoading}>Pagar PIX</Button>
                                </ButtonContainer>
                            </InlineContainer>
                        </OperationPanel>
                    </OperationContainer>
                    <ExtractContainer>
                        <ExtractContainerTitle>Extrato da Conta</ExtractContainerTitle>
                        {transactions.length === 0
                        ? (
                            <NoOperationContainer>
                                <MdMoneyOff size={100} color="#c7c4c4"/>
                                <NoOperationContainerText>SEM OPERAÇÕES</NoOperationContainerText>
                            </NoOperationContainer>
                        )
                        : (
                            <OperationsContainer>
                                {transactions.map((operation, index) => (
                                    <Operation key={index}>
                                        {operation.type === "received"
                                        ? <BsArrowDownCircle size={45} color="green"/>
                                        : <BsArrowUpCircle size={45} color="red"/>}
                                        <InlineOperationInfo>
                                            <OperationInfo>
                                                <OperationInfoValue>{formatMoney(operation.value)}</OperationInfoValue>
                                                <OperationInfoUser>
                                                    {operation.type === "received" ? "RECEBIDO DE " : "ENVIADO PARA "}
                                                    <strong>{operation.user.firstname} {operation.user.lastname}</strong>
                                                </OperationInfoUser>
                                            </OperationInfo>
                                            <OperationDate>{formatDate(operation.updatedAt)}</OperationDate>
                                        </InlineOperationInfo>
                                    </Operation>
                                ))}
                            </OperationsContainer>
                        )
                        }
                    </ExtractContainer>
                </Main>
            </Wrapper>
        </Container>
    );
}

export default Dashboard;