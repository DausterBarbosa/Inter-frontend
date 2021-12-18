import styled from "styled-components";

import {Link} from "react-router-dom";

export const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: row;
`;

export const SidePanel = styled.div<{image:any}>`
    width: 50%;
    height: 100vh;
    background-image: url(${({image}) => image});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
`;

export const LoginPanel = styled.div`
    width: 50%;
    height: 100vh;
    background: ${({theme}) => theme.colors.background};
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const LoginContainer = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 350px;

    img{
        height: 50px;
        margin-bottom: 40px;
    }

    p {
        color: ${({theme}) => theme.colors.secondary};
        font-weight: bold;
        font-size: 13px;
        margin-top: 20px;
    }
`;

export const NavigateButton = styled(Link)`
    color: ${({theme}) => theme.colors.primary};
    cursor: pointer;
    font-size: 15px;
    text-decoration: none;
`;

export const ButtonContainer = styled.div`
    width: 100%;
    margin-top: 50px;
`;