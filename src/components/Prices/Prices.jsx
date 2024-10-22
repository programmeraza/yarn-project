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
                <img src="/img/card1.png" alt="broken" className="price__img" />
                <h3 className="price__card_name">{t("pricescard1name")}</h3>
                <h5 className="price__price">{t("pricescard1price")}</h5>
              </div>

              <div className="price__card">
                <img src="/img/card2.png" alt="broken" className="price__img" />
                <h3 className="price__card_name">{t("pricescard2name")}</h3>
                <h5 className="price__price">{t("pricescard2price")}</h5>
              </div>

              <div className="price__card">
                <img src="/img/card3.png" alt="broken" className="price__img" />
                <h3 className="price__card_name">{t("pricescard3name")}</h3>
                <h5 className="price__price">{t("pricescard3price")}</h5>
              </div>

              <div className="price__card">
                <img src="/img/card4.png" alt="broken" className="price__img" />
                <h3 className="price__card_name">{t("pricescard4name")}</h3>
                <h5 className="price__price">{t("pricescard4price")}</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Prices;
