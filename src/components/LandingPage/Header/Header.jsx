import React from 'react';
import './Header.css';
import HeaderContent from './HeaderContent/HeaderContent';
import HeaderTop from './HeaderTop/HeaderTop';

const Header = () => {
    return (
        <>
            <section className="header">
                    <HeaderTop></HeaderTop>
                    <HeaderContent></HeaderContent>
            </section>
        </>
    );
};

export default Header;