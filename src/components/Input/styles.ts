import styled from "styled-components";

export const InputContainer = styled.input`
    padding: 15px;
    border-radius: 7px;
    font-size: 17px;
    border: 1px solid #EEE;
    width: 100%;
    background: ${({theme}) => theme.colors.backgroundLight};
    outline-color: ${({theme}) => theme.colors.primary};
    color: ${({theme}) => theme.colors.secondary};

    & + & {
        margin-top: 10px;
    }
`;