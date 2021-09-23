import React from 'react';
import './Checkbox.css';
import CheckboxIcon from '../common/icons/CheckboxIcon/CheckboxIcon';

interface CheckboxProps {
    checked: boolean;
    toggle: () => void;
}

const Checkbox: React.FC<CheckboxProps> = ({checked, toggle}) => {
    return (
        <div className='checkbox_wrapper'>
            <input type='checkbox' checked={checked} onChange={() => toggle()} className='checkbox' id='checkbox'/>
            <label htmlFor="checkbox" className='checkbox_label'>
                <CheckboxIcon className='checkbox_icon' color='#0880AE'/>
            </label>
        </div>
    );
};

export default Checkbox;