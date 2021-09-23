import React from 'react';
import './Dropdown.css'
import {ILang} from "../../types/lang";

interface DropdownItemProps {
    item: ILang;
    active?: boolean;
    selectItem: (id: number) => void;
}

const DropdownItem: React.FC<DropdownItemProps> = ({item, active, selectItem}) => {
    return (
        <li>
            <button onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
                event.preventDefault();
                selectItem(item.id);
            }} className={`dropdown_item ${active ? 'active' : ''}`}>{item.name}</button>
        </li>
    );
};

export default DropdownItem;