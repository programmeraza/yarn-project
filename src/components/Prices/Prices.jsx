import React from "react";
import "./Price.scss";
import { t } from "i18next";
import { useTranslation } from "react-i18next";

const Prices = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <>
      <div className="price" id="price">
        <div className="container">
          <div className="price__wrapper">
            <h4 className="price__name">{t("pricesname")}</h4>
            <h1 className="price__title">{t("pricestitle")}</h1>
            <p className="price__text">{t("pricestext")}</p>
            <div className="price__cards">
              <div className="price__card">
                <img src="/img/card1.webp" alt="broken" className="price__img" />
                <h3 className="price__card_name">{t("pricescard1name")}</h3>
              </div>

              <div className="price__card">
                <img src="/img/card7.jpg" alt="broken" className="price__img" />
                <h3 className="price__card_name">{t("pricescard6name")}</h3>
              </div>

              <div className="price__card">
                <img src="/img/card2.webp" alt="broken" className="price__img" />
                <h3 className="price__card_name">{t("pricescard2name")}</h3>
              </div>

              <div className="price__card">
                <img src="/img/card8.jpg" alt="broken" className="price__img" />
                <h3 className="price__card_name">{t("pricescard5name")}</h3>
              </div>

              <div className="price__card">
                <img src="/img/card3.webp" alt="broken" className="price__img" />
                <h3 className="price__card_name">{t("pricescard3name")}</h3>
              </div>

              <div className="price__card">
                <img src="/img/card5.webp" alt="broken" className="price__img" />
                <h3 className="price__card_name">{t("pricescard4name")}</h3>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Prices;
