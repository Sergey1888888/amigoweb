import {ChangeEvent, FocusEvent, useState} from "react";
import {useValidation} from "./useValidation";
import {IValidations} from "../types/validations";

export const useInput = (validations: IValidations) => {
    const [value, setValue] = useState<undefined | string>(undefined);
    const [isDirty, setIsDirty] = useState<boolean>(false);
    const valid = useValidation(value, validations);

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    }

    const onBlur = (e: FocusEvent<HTMLInputElement>) => {
        setIsDirty(true);
    }

    return {
        value,
        onChange,
        onBlur,
        isDirty,
        ...valid
    }
};