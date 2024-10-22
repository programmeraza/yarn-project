import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './Header.scss';
import Select from 'react-select';

const languageOptions = [
  { value: 'en', label: 'English' },
  { value: 'ru', label: 'Russian' },
  { value: 'uz', label: 'Uzbek' },
];

const Header = () => {

  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false)
  const [isBurgerX, setIsBurgerX] = useState(false)

  const changeLanguage = (selectedOption) => {
    i18n.changeLanguage(selectedOption.value);
  };


    const toggleBurger = () => {
        toggleBurgerX()
        toggleMenu()
    }

    const toggleMenu = () => {
        setIsOpen(prev => !prev)
    }

    const toggleBurgerX = () => {
        setIsBurgerX(prev => !prev)
    }

    const toggleCloseMenu = () => {
        toggleBurger()
    }

  return (
    <>
      <section className="header">
        <div className="container">
          <div className="header__wrapper">
            <h1>LOGO</h1>

            <ul className="header__ul">
              <a href='#about'>{t('about')}</a>
              <a href='#price'>{t('price')}</a>
              <a href='#advantages'>{t('advantages')}</a>
              <a href='#gallery'>{t('gallery')}</a>
              <a href='#contacts'>{t('contacts')}</a>
            </ul>

            <div className="header__select-wrapper">
              <Select
                options={languageOptions}
                defaultValue={languageOptions[0]}
                onChange={changeLanguage}
                classNamePrefix="custom-select"
              />
            </div>

            <button
              onClick={toggleBurger}
              className={isBurgerX ? 'header__burger active' : 'header__burger'}>
              <span></span>
              <span></span>
              <span></span>
            </button>

            <div className={isOpen ? 'header__menu active' : 'header__menu'}>
              <ul className="header__ul-burger">
                <a href='#about' onClick={toggleCloseMenu}>{t('about')}</a>
                <a href='#price' onClick={toggleCloseMenu}>{t('price')}</a>
                <a href='#advantages' onClick={toggleCloseMenu}>{t('advantages')}</a>
                <a href='#gallery' onClick={toggleCloseMenu}>{t('gallery')}</a>
                <a href='#contacts' onClick={toggleCloseMenu}>{t('contacts')}</a>
              </ul>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default Header;