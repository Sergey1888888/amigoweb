import React from 'react';
import './Button.css'

interface ButtonProps {
    disabled?: boolean;
    width?: string;
}

const Button: React.FC<ButtonProps> = ({children, disabled, width}) => {
    return (
        <button className='button' disabled={disabled} style={{width: width}}>
            {children}
        </button>
    );
};

export default Button;