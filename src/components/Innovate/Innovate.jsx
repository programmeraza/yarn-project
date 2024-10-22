import React from "react";
import './Innovate.scss'
import { useTranslation } from "react-i18next";
import { t } from "i18next";

const Innovate = () => {

  const { t, i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <>
      <div className="innovate">
        <div className="container">
          <div className="innovate__wrapper">
            <h1 className="innovate__number">
              76 <br />
              {t('innovate1')}
            </h1>
            <h1 className="innovate__number">
              56 <br />
              {t('innovate2')}
            </h1>
            <h1 className="innovate__number">
              83 <br />
              {t('innovate3')}
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Innovate;
