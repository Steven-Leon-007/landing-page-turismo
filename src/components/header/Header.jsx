import React from 'react';
import './Header.css';
import Logo from '../../assets/logo.png';
import { useTranslation } from 'react-i18next';

const Header = () => {

    const [t, i18n] = useTranslation("global");

    const handleLanguageChange = (lang) => {
        i18n.changeLanguage(lang)
    }

    return (
        <header>
            <div className="left-side-logo">
                <a href="/">
                    <img src={Logo} alt="logo" />
                    <h2>Nombre del Logo</h2>
                </a>
            </div>
            <div className="right-side-links">
                <ul>
                    <li><a href="/">{t("header.nav-first")}</a></li>
                    <li><a href="/">{t("header.nav-second")}</a></li>
                    <li><a href="/">{t("header.nav-third")}</a></li>
                    <button onClick={() => handleLanguageChange("en")}>EN</button>
                    <button onClick={() => handleLanguageChange("es")}>ES</button>
                </ul>
            </div>
        </header>
    )
}

export default Header;