import {ButtonHTMLAttributes} from "react";

import {ButtonContainer, ButtonLoading} from "./styles";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    loading?: boolean;
}

const Button:React.FC<ButtonProps> = ({children, loading, ...rest}) => {
    return (
        <ButtonContainer {...rest} disabled={loading}>
            {
                loading
                ? <ButtonLoading size={30}/>
                : children
            }
        </ButtonContainer>
    );
}

export default Button;