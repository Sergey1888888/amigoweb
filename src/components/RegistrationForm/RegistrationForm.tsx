import React, {useEffect, useState} from 'react';
import './RegistrationForm.css'
import TextField from "../TextField/TextField";
import Dropdown from "../Dropdown/Dropdown";
import Checkbox from "../Checkbox/Checkbox";
import Button from "../Button/Button";
import {useInput} from "../../hooks/useInput";
import {useDropdown} from "../../hooks/useDropdown";
import {Langs} from "../../mocks/langs";

const RegistrationForm: React.FC = () => {
    const [checked, setChecked] = useState<boolean>(false);
    const [disabled, setDisabled] = useState<boolean>(true);
    const name = useInput({isEmpty: true, isName: true});
    const email = useInput({isEmpty: true, isEmail: true});
    const phone = useInput({isEmpty: true, isPhone: true});
    const langs = useDropdown();

    useEffect(() => {
        if ((name.isDirty && email.isDirty && phone.isDirty)
            && (!name.isEmpty && !name.isNameError && !email.isEmpty && !email.isEmailError && !phone.isEmpty && !phone.isPhoneError)
            && typeof langs.value === 'number' && checked
        ) {
            setDisabled(false);
        }
        else setDisabled(true);
    }, [name.isDirty, name.isNameError, name.isEmpty, email.isDirty, email.isEmpty, email.isEmailError, phone.isDirty, phone.isEmpty, phone.isPhoneError, langs.value, checked])
    return (
        <form className='form'>
            <h2 className='form_title'>Регистрация</h2>
            <span className='form_title__exist-acc'>Уже есть аккаунт?</span><span>Войти</span>
            <TextField error={(name.isDirty && name.isEmpty) || (name.isDirty && name.isNameError) ? 'Введено не корректное значение' : undefined}
                       value={name.value} onChange={name.onChange} onBlur={name.onBlur} placeholder='Введите Ваше имя'
                       label='Имя'/>
            <TextField
                error={(email.isDirty && email.isEmpty) || (email.isDirty && email.isEmailError) ? 'Введено не корректное значение' : undefined}
                value={email.value} onChange={email.onChange} onBlur={email.onBlur} placeholder='Email'
                label='Введите ваш email'/>
            <TextField error={(phone.isDirty && phone.isEmpty) || (phone.isDirty && phone.isPhoneError) ? 'Введено не корректное значение' : undefined}
                       value={phone.value} onChange={phone.onChange} onBlur={phone.onBlur}
                       placeholder='Введите номер телефона' label='Номер телефона'/>
            <Dropdown title='Язык' label='Язык' items={Langs} onChange={langs.onChange} value={langs.value}/>
            <div className='form_accept'>
                <Checkbox toggle={() => setChecked(!checked)} checked={checked}/><span>Принимаю <span>условия</span> использования</span>
            </div>
            <Button disabled={disabled}>Зарегистрироваться</Button>
        </form>
    );
};

export default RegistrationForm;