import React from 'react'
import Logo from '../../../assets/logo.png';
import ENLang from '../../../assets/en_lang.svg';
import ESLang from '../../../assets/es_lang.svg';
import '../desk_nav/DeskNav.css';

const DeskNav = ({t, handleLanguageChange}) => {
    return (
        <nav id='desktop-nav'>
            <div className="left-side-logo">
                <a href="/">
                    <img src={Logo} alt="logo" />
                    <h2>Nombre del Logo</h2>
                </a>
            </div>
            <div className="right-side-links">
                <ul>
                    <li><a href="/">{t("header.nav-second")}</a></li>
                    <li><a href="/">{t("header.nav-first")}</a></li>
                    <li><a href="/">{t("header.nav-third")}</a></li>
                    <div className="language-toggle">
                        <button onClick={() => handleLanguageChange("en")} id='en-lang'>
                            <img src={ENLang} alt="English Language Toggle" />
                        </button>
                        <button onClick={() => handleLanguageChange("es")} id='es-lang'>
                            <img src={ESLang} alt="Spanish Language Toggle" />
                        </button>
                    </div>
                </ul>
            </div>
        </nav>
    )
}

export default DeskNav;