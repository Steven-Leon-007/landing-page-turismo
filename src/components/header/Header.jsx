import React from 'react';
import './Header.css';

import { useTranslation } from 'react-i18next';
import DeskNav from './desk_nav/DeskNav';
import MobileNav from './mobile_nav/MobileNav';

const Header = () => {

    const [t, i18n] = useTranslation("global");

    const handleLanguageChange = (lang) => {
        i18n.changeLanguage(lang)
    }

    return (
        <header>
            <div className="header-container">
                <DeskNav t={t} handleLanguageChange={handleLanguageChange}/>
                <MobileNav t={t} handleLanguageChange={handleLanguageChange}/>
            </div>
        </header>
    )
}

export default Header;