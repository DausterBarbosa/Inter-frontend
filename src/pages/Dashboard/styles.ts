import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
`;

export const Wrapper = styled.div`
    width: 80%;
    height: 100vh;
    max-width: 1100px;
`;

export const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 0;

    img {
        height: 50px;
    }
`;

export const InfoContainer = styled.div`
    
    line-height: 20px;

    p > strong{
        color: ${({theme}) => theme.colors.primary};
    }

    p + strong{
        display: block;
    }

    strong + strong {
        color: ${({theme}) => theme.colors.primary};
        cursor: pointer;
    }
`;

export const Main = styled.main`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 50px;
`;

export const OperationContainer = styled.div`
    width: 47%;
    padding: 20px;
    border-radius: 7px;
    box-shadow: 0 0 1em #EEE;
    height: max-content;
`;

export const BalanceContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 60px;
`;

export const BalanceContainerTitle = styled.strong`
    font-size: 20px;
`;

export const Balance = styled.strong`
    color: ${({theme}) => theme.colors.primary};
    font-size: 35px;
`;

export const OperationPanel = styled.div`
    & + & {
        margin-top: 20px;
    }
`;

export const OperationPanelTitle = styled.strong`
    font-size: 20px;
`;

export const InlineContainer = styled.form`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 10px;
`;

export const ButtonContainer = styled.div`
    width: 200px;
    margin-left: 10px;
`;

export const ExtractContainer = styled.div`
    width: 50%;
    padding: 20px;
    border-radius: 7px;
    box-shadow: 0 0 1em #EEE;
    max-height: 500px;
    overflow-y: auto;
`;

export const ExtractContainerTitle = styled.strong`
    font-size: 20px;
`;

export const NoOperationContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 250px;
`;

export const NoOperationContainerText = styled.strong`
    font-size: 20px;
    color: #c7c4c4;
    margin-top: 10px;
`;

export const KeyContainer = styled.div`
    margin: 20px 0 30px;
`;

export const KeyContainerTitle = styled.strong`
    display: block;
    margin-bottom: 10px;
    text-align: center;
    color: ${({theme}) => theme.colors.primary};
`;

export const OperationsContainer = styled.div`
    width: 100%;
`;

export const Operation = styled.div`
    display: flex;
    align-items: center;
    box-shadow: 0 0 1em #EEE;
    padding: 15px;
    border-radius: 7px;
    margin-top: 10px;

    & + &{
        margin-top: 10px;
    }
`;

export const InlineOperationInfo = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-left: 10px;
`;

export const OperationInfo = styled.div`
    display: flex;
    flex-direction: column;
`;

export const OperationInfoValue = styled.strong`
    color: ${({theme}) => theme.colors.primary};
    font-size: 20px;
`;

export const OperationInfoUser = styled.p`
    font-size: 17px;
    margin-top: 5px;

    strong{
        text-transform: uppercase;
    }
`;

export const OperationDate = styled.p`
    color: #c7c4c4;
    font-size: 17px;
    text-align: center;
    width: 100px;
`;