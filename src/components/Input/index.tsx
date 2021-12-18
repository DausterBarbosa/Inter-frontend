import {InputHTMLAttributes} from "react";

import {InputContainer} from "./styles";

const Input:React.FC<InputHTMLAttributes<HTMLInputElement>> = ({...rest}) => {
    return <InputContainer {...rest}/>;
}

export default Input;