import {useEffect, useState} from "react";
import {IValidations} from "../types/validations";

export const useValidation = (value: string | undefined, validations: IValidations) => {
    const [isEmpty, setIsEmpty] = useState<boolean>(true);
    const [isEmailError, setIsEmailError] = useState<boolean>(true);
    const [isNameError, setIsNameError] = useState<boolean>(true);
    const [isPhoneError, setIsPhoneError] = useState<boolean>(true);

    useEffect(() => {
        for (const validation in validations) {
            switch (validation) {
                case 'isEmpty':
                    value ? setIsEmpty(false) : setIsEmpty(true);
                    break;
                case 'isName':
                    const nameReg = /^[а-яА-ЯёЁa-zA-Z][а-яА-ЯёЁa-zA-Z- ]+[а-яА-ЯёЁa-zA-Z]$/;
                    nameReg.test(String(value)) ? setIsNameError(false) : setIsNameError(true);
                    break;
                case 'isPhone':
                    // eslint-disable-next-line no-useless-escape
                    const phoneReg = /^(\+7|7|8)[\-]?\(?[489][0-9]{2}\)?[\-]?[0-9]{3}[\-]?[0-9]{2}[\-]?[0-9]{2}$/;
                    phoneReg.test(String(value)) ? setIsPhoneError(false) : setIsPhoneError(true);
                    break;
                case 'isEmail':
                    // eslint-disable-next-line no-useless-escape
                    const emailReg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                    emailReg.test(String(value).toLowerCase()) ? setIsEmailError(false) : setIsEmailError(true);
                    break;
            }
        }
    }, [value, validations])

    return {
        isEmpty,
        isEmailError,
        isPhoneError,
        isNameError
    }
};