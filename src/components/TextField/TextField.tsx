import React from 'react';
import './TextField.css';

interface TextFieldProps {
    error?: string;
    placeholder: string;
    label: string;
    width?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
    value?: string;
}

const TextField: React.FC<TextFieldProps> = ({error, placeholder, label, width, onChange, onBlur, value}) => {
    return (
        <div className='textfield' style={{width: width}}>
            <label className='textfield_label' htmlFor="textfield_input">{label}</label>
            <input value={value} onChange={onChange} onBlur={onBlur} className='textfield_input' id='textfield_input' placeholder={placeholder}/>
            <div className='textfield_error'>{error}</div>
        </div>
    );
};

export default TextField;