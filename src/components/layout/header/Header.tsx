import React from 'react';

import './header.scss'
import BottomHeader from './bottomHeader/BottomHeader';
import MidHeader from './midHeader/MidHeader';
import TopHeader from './topHeader/TopHeader';

const Header: React.FC = () => {
    return (
        <header>
            <TopHeader />
            <MidHeader />
            <BottomHeader />
            a
        </header>
    );
};

export default Header;