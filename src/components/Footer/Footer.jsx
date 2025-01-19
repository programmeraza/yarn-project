import React from "react";
import "./Footer.scss";
import { FaTelegramPlane } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { IoLogoYoutube } from "react-icons/io";
import { useTranslation } from "react-i18next";
import { t } from "i18next";

const Footer = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <>
      <div className="footer">
        <div className="container">
          <div className="footer__wrapper">
            <div className="footer__card">
              <img src="/img/logo1.png" width={200} alt="" />
              <p className="footer__description">{t("footertext")}</p>
            </div>

            <div className="footer__card none">
              <h1>{t("footercard1")}</h1>
              <ul>
                <a href="#about">{t("about")}</a>
                <a href="#price">{t("price")}</a>
                <a href="#advateges">{t("advantages")}</a>
                <a href="#gellary">{t("gallery")}</a>
              </ul>
            </div>

            <div className="footer__card none">
              <h1>{t("footercard2")}</h1>
              <p>+998 97 409 08 60</p>
              <div className="footer__icons">
                <a href="https://t.me/pryaji_bot">
                  <FaTelegramPlane className="footer__icon" />
                </a>
                <a href="https://www.instagram.com/">
                  <RiInstagramFill className="footer__icon" />
                </a>
                <a href="https://www.youtube.com/">
                  <IoLogoYoutube className="footer__icon" />
                </a>
              </div>
            </div>

            <div className="footer__cards">
              <div className="footer__card">
                <h1>{t("footercard1")}</h1>
                <ul>
                  <a href="#about">{t("about")}</a>
                  <a href="#price">{t("price")}</a>
                  <a href="#advateges">{t("advantages")}</a>
                  <a href="#gellary">{t("gallery")}</a>
                </ul>
              </div>

              <div className="footer__card">
                <h1>{t("footercard2")}</h1>
                <p>+998 97 409 08 60</p>
                <div className="footer__icons">
                  <a href="https://t.me/pryaji_bot">
                    <FaTelegramPlane className="footer__icon" />
                  </a>
                  <a href="https://www.instagram.com/">
                    <RiInstagramFill className="footer__icon" />
                  </a>
                  <a href="https://www.youtube.com/">
                    <IoLogoYoutube className="footer__icon" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
