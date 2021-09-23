import {useState} from "react";

export const useDropdown = () => {
    const [value, setValue] = useState<null | number>(null);

    const onChange = (id: number) => {
        setValue(id);
    }
    return {
        value,
        onChange
    }
};