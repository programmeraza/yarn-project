import React from "react";
import "./Hero.scss";
import { useTranslation } from "react-i18next";

const Hero = () => {

  const { t, i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  }

  return (
    <>
      <div className="hero">
        <div className="container">
          <div className="hero__wrapper">
            <div className="hero__texts">
              <h1 className="hero__title">{t('herotitle')}</h1>
              <p className="hero__text">
                {t('herotext')}
              </p>
            </div>
            <div className="hero__images">
              <img src="/img/herobg.avif" alt="broken" className="hero__img" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
