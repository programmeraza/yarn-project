import React from "react";
import './About.scss';
import { useTranslation } from "react-i18next";

const About = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className="about" id="about">
      <video className="about__video" autoPlay muted loop>
        <source src="/img/bg.MP4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="container">
        <div className="about__wrapper">
          <p className="about__text">{t('abouttext')}</p>
        </div>
      </div>
    </div>
  );
};

export default About;
