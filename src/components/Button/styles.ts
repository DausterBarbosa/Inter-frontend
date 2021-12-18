import styled, { keyframes } from "styled-components";

import {AiOutlineLoading3Quarters} from "react-icons/ai";

export const ButtonContainer = styled.button`
    background: ${({theme}) => theme.colors.primary};
    color: ${({theme}) => theme.colors.background};
    font-weight: bold;
    width: 100%;
    height: 50px;
    padding: 15px;
    font-size: 15px;
    border-radius: 7px;
    border: none;
    cursor: pointer;
    outline-color: ${({theme}) => theme.colors.primary};
    display: flex;
    align-items: center;
    justify-content: center;

    &:disabled {
        opacity: 0.8;
    }

    &:hover {
        opacity: 0.8;
    }
`;

const Rotate = keyframes`
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
`;

export const ButtonLoading = styled(AiOutlineLoading3Quarters)`
    animation: ${Rotate} 1s linear infinite;
`