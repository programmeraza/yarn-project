import React from "react";
import "./Advanteges.scss";
import { t } from "i18next";
import { useTranslation } from "react-i18next";

const Advanteges = () => {

  const { t, i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  }

  return (
    <>
      <div className="advanteges" id="advantages">
        <div className="container">
          <div className="advanteges__wrapper">
            <div className="advanteges__card first">
              <div className="advanteges__texts">
                <h1>01</h1>
                <h4>{t('adv1name')}</h4>
                <h2>{t('adv1title')}</h2>
                <p>
                  {t('adv1text')}
                </p>
                <a href="#contacts">{t('adv1btn')}</a>
              </div>
              <img src="/img/innovatebg.webp" alt="broken" />
            </div>
            <div className="advanteges__card second">
              <img src="/img/matrasi.jpg" alt="broken" />
              <div className="advanteges__texts">
                <h1>02</h1>
                <h4>{t('adv2name')}</h4>
                <h2>{t('adv2title')}</h2>
                <p>
                  {t('adv3text')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Advanteges;
