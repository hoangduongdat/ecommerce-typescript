import React, { useState } from 'react';

import './bottomHeader.scss'
import { Link } from 'react-router-dom'
import Dropdown from '../../../dropdown/Dropdown';
import IDropdownItem from '../../../../models/DropdownItem';

interface menuItem {
    displayName: string;
    path: string;
    icon?: string;
    dataTitle?: IDropdownItem[],
    data?: IDropdownItem[]
}

const listMenu: menuItem[] = [
    {
        displayName: 'Home',
        path: '/'
    },
    {
        displayName: 'Shop',
        path: '/shop',
        icon: 'bx bxs-chevron-down',
        dataTitle: [{
            text: 'Categories',
        },
        {
            text: 'Categories',
        },
        {
            text: 'Categories',
        },
        {
            text: 'Categories',
        },
        {
            text: 'Categories',
        }
        ],
        data: [
            {
                text: 'Wireless',
            },
            {
                text: 'Inear headphone'
            },
            {
                text: 'Overear headphone'
            },
            {
                text: 'sport headphone'
            },
            {
                text: 'sport headphone'
            },
            {
                text: 'Wireless',
            },
            {
                text: 'Inear headphone'
            },
            {
                text: 'Overear headphone'
            },
            {
                text: 'sport headphone'
            },
            {
                text: 'sport headphone'
            },
            {
                text: 'Wireless',
            },
            {
                text: 'Inear headphone'
            },
            {
                text: 'Overear headphone'
            },
            {
                text: 'sport headphone'
            },
            {
                text: 'sport headphone'
            },
            {
                text: 'Wireless',
            },
            {
                text: 'Inear headphone'
            },
            {
                text: 'Overear headphone'
            },
            {
                text: 'sport headphone'
            },
            {
                text: 'sport headphone'
            }
        ]
    },
    {
        displayName: 'Product',
        path: '/product'
    },
    {
        displayName: 'Blog',
        path: '/blog'
    },
    {
        displayName: 'Contact',
        path: '/contact'
    },
]


const BottomHeader: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false)
    const handleIsOpen = (item: menuItem) => {
        if (item.data) setIsOpen(!isOpen)
    }
    const [isOpenMenu, setIsOpenMenu] = useState(false)
    return (
        <>
            <li
                className={`bottomHeader-toggle__menu`}
                onClick={() => setIsOpenMenu(!isOpenMenu)}
            ><i className='bx bx-menu'></i></li>

            <div className={`bottomHeader ${isOpenMenu ? 'active' : ''}`}>
                <li
                    className={`bottomHeader-toggle__close`}
                    onClick={() => setIsOpenMenu(!isOpenMenu)}
                ><i className='bx bx-x'></i></li>
                <div className={`container  ${isOpenMenu ? 'active' : ''}`}>
                    {listMenu.map((item, index) => (
                        <Link
                            key={index}
                            to={"/"}
                            className="bottomHeader-link"
                            onClick={() => handleIsOpen(item)}
                        >
                            {item.displayName} <i className={item.icon}></i>
                            {item.data && <Dropdown
                                data={item.data}
                                dataTitle={item.dataTitle}
                                isOpen={isOpen}
                                setIsOpen={setIsOpen}
                                className="dropdown-flex"

                            />}

                        </Link>

                    ))}
                </div>
            </div>
        </>


    );
};

export default BottomHeader;