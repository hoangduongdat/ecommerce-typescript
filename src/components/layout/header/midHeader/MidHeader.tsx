import React, { useState } from 'react';

import './midHeader.scss'

const MidHeader: React.FC = () => {
    const [isOpenMenu, setIsOpenMenu] = useState(false)

    return (
        <div className="midHeader">
            <div className="midHeader-container container">
                <a href="#" className="midHeader-logo">ATShop</a>
                <div className="midHeader-search">
                    <input type="text" placeholder="Search" />
                    <i className='bx bx-search-alt'></i>
                </div>
                <ul className="midHeader-userMenu">
                    <li><a href="#"><i className='bx bx-bell'></i></a></li>
                    <li><a href="#"><i className='bx bx-user-circle'></i></a></li>
                    <li><a href="#"><i className='bx bx-cart'></i></a></li>

                </ul>
            </div>

        </div >
    );
};

export default MidHeader;