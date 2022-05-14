import React, { useEffect, useRef, useState } from 'react';
import Dropdown from '../../../dropdown/Dropdown';

import './topHeader.scss'

import IDropdownItem from '../../../../models/DropdownItem'
const dataMoney: IDropdownItem[] = [{
    text: 'VND',
    icon: 'bx bx-dollar'

},
{
    text: 'Dolar'
}]
const dataLanguages: IDropdownItem[] = [
    {
        text: 'VIETNAMESE',
    },
    {
        text: 'JAPANESE'
    },
    {
        text: 'FRENCH'
    },
    {
        text: 'SPANISH'
    }
]

const TopHeader: React.FC = () => {
    const [isOpenMoney, setIsOpenMoney] = useState(false)
    const [isOpenLanguage, setIsOpenLanguage] = useState(false)
    const [currency, setCurrency] = useState('USD')
    const [language, setLanguage] = useState('ENGLISH')
    const handleClickCurrencyItem = (item: string): void => {
        setCurrency(item)
        setIsOpenMoney(!isOpenMoney)
    }
    const handleClickLanguageItem = (item: string): void => {
        setLanguage(item)
        setIsOpenLanguage(!isOpenLanguage)
    }
    const handleIsOpenMoney = (): void => {
        setIsOpenMoney(!isOpenMoney)
    }
    const handleIsOpenLang = (): void => {
        setIsOpenLanguage(!isOpenLanguage)
    }


    // useEffect(() => {

    // })
    return (
        <div className="top-header">
            <div className="container top-header__flex">
                <ul className="top-header__devided top-header__devided-left">
                    <li>
                        <a href="#">+840123456789</a>
                    </li>
                    <li>
                        <a href="#">atshop@mail.com</a>
                    </li>
                </ul>
                <ul className="top-header__devided">
                    <li className="devided-dropdown" onClick={handleIsOpenMoney}>
                        <span>{currency}</span>
                        <i className='bx bxs-chevron-down'></i>
                        <Dropdown
                            data={dataMoney}
                            isOpen={isOpenMoney}
                            setIsOpen={setIsOpenMoney}
                            change={handleClickCurrencyItem}
                        />
                    </li>
                    <li className="devided-dropdown" onClick={handleIsOpenLang}>
                        <span>{language}</span>
                        <i className='bx bxs-chevron-down'></i>
                        <Dropdown
                            data={dataLanguages}
                            isOpen={isOpenLanguage}
                            setIsOpen={setIsOpenLanguage}
                            change={handleClickLanguageItem}
                        />
                    </li>
                    <li><a href="#">ORDER TRACKING</a></li>
                </ul>
            </div>

        </div>
    );
};

export default TopHeader;