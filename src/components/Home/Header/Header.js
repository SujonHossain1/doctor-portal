import React from 'react';
import './Header.css';
import HeaderMain from '../HeaderMain/HeaderMain';
import Navbar from '../../Shared/Navbar/Navbar';
import BusinessInfo from '../BusinessInfo/BusinessInfo';

const Header = () => {
    return (
        <header className="header">
            <Navbar/>
            <HeaderMain/>
            <BusinessInfo/>
        </header>
    );
};

export default Header;