import React, {useState} from 'react';
import './Dropdown.css'
import {ILang} from '../../types/lang';
import ChevronBottomIcon from "../common/icons/ChevronBottomIcon/ChevronBottomIcon";
import DropdownItem from "./DropdownItem";

interface DropdownProps {
    title: string;
    label: string;
    items: Array<ILang>;
    onChange: (id: number) => void;
    value: number | null;
}

const Dropdown: React.FC<DropdownProps> = ({title, label, items, onChange, value}) => {
    const [opened, setOpened] = useState<boolean>(false);
    const toggleOpened = () => setOpened(!opened);
    const selectItem = (id: number) => {
        onChange(id);
        setOpened(false);
    }
    return (
        <div className='dropdown_wrapper'>
            <div className='dropdown_label'>{label}</div>
            <div onClick={() => toggleOpened()} className={`dropdown_header ${opened ? 'opened' : ''}`} tabIndex={0}>
                <div className='dropdown_header__title selected'>{typeof value === 'number' ? items[value].name : title}</div>
                <div className='dropdown_header__button'>
                    <ChevronBottomIcon/>
                </div>
            </div>
            {opened && (
                <ul className='dropdown_items'>
                    {items.map(item => <DropdownItem selectItem={selectItem} key={item.id} active={value === item.id} item={item}/>)}
                </ul>
            )}
        </div>
    );
};

export default Dropdown;