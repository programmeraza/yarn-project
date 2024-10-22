import React from "react";
import './Empower.scss'
import { t } from "i18next";
import { useTranslation } from "react-i18next";

const Empower = () => {

  const { t, i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  }

  return (
    <>
      <div className="empower">
        <div className="container">
          <div className="empower__wrapper">
            <h1 className="empower__title">{t('empowertitle')}</h1>
            <p className="empower__text">
              {t('empowertext')}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Empower;
