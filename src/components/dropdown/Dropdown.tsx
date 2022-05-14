import React, { useEffect, useRef } from 'react';
import IDropdownItem from './../../models/DropdownItem'
import './dropdown.scss'

interface Props {
    isOpen?: boolean;
    data: IDropdownItem[];
    dataTitle?: IDropdownItem[];
    change?: (item: string) => void;
    setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>;
    className?: string;
}


const Dropdown: React.FC<Props> = ({ data, isOpen, change, setIsOpen, className, dataTitle }) => {

    const dropdownRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        function handleClickOutside(event: any) {
            if (dropdownRef.current && !dropdownRef?.current?.parentNode?.contains(event.target)) {
                if (setIsOpen) setIsOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);

        return () => document.removeEventListener("mousedown", handleClickOutside);

    })

    return (
        <div className={`dropdown ${isOpen ? 'active' : ''}`} ref={dropdownRef}>
            <div className={`dropdown-content  ${className}`}>
                {
                    dataTitle?.map((item, index) => (
                        <div
                            className="dropdown-content__header"
                            key={index}
                            onClick={change ? () => change(item?.text) : undefined}
                        >
                            {item.text && <span>{item.text}</span>}
                            {item.icon && <i className={item.icon}></i>}
                        </div>
                    ))

                }
                {
                    data.map((item, index) => (
                        <div
                            className="dropdown-content__item"
                            key={index}
                            onClick={change ? () => change(item?.text) : undefined}
                        >
                            {item.text && <span>{item.text}</span>}
                            {item.icon && <i className={item.icon}></i>}
                        </div>
                    ))

                }

            </div>
        </div>
    );
};

export default Dropdown;