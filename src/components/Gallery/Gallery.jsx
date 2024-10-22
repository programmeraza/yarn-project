import React, { useEffect, useRef, useState } from "react";
import "./Gallery.scss";
import Swipper from "../Swipper/Swipper";
import { useTranslation } from "react-i18next";

const Gallery = () => {
  const { t, i18n } = useTranslation();
  const dragContainerRef = useRef(null);
  const spinContainerRef = useRef(null);
  const caruselRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const radius = 340;
  const imgWidth = 520;
  const imgHeight = 370;

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  }

  useEffect(() => {
    const carusel = caruselRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.5 } // Активировать, когда 50% элемента видимо
    );

    if (carusel) {
      observer.observe(carusel);
    }

    return () => {
      if (carusel) {
        observer.unobserve(carusel);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const dragContainer = dragContainerRef.current;
    const spinContainer = spinContainerRef.current;
    const images = spinContainer.getElementsByTagName("img");
    let tX = 0;
    let tY = 10;

    spinContainer.style.width = `${imgWidth}px`;
    spinContainer.style.height = `${imgHeight}px`;
    setTimeout(() => {
      Array.from(images).forEach((img, index) => {
        img.style.transform = `rotateY(${
          index * (360 / images.length)
        }deg) translateZ(${radius}px)`;
      });
    }, 1000);

    const onPointerDown = (e) => {
      e.preventDefault();
      const startX = e.clientX;
      const startY = e.clientY;
      document.onpointermove = (e) => {
        const deltaX = e.clientX - startX;
        const deltaY = e.clientY - startY;
        tX += deltaX * 0.01;
        tY += deltaY * 0.05;
        applyTransform(dragContainer, tX, tY);
      };
      document.onpointerup = () => {
        document.onpointermove = document.onpointerup = null;
      };
    };

    const applyTransform = (obj, x, y) => {
      obj.style.transform = `rotateX(${-y}deg) rotateY(${x}deg)`;
    };

    document.onpointerdown = onPointerDown;

    return () => {
      document.onpointerdown = null;
    };
  }, [isVisible]);

  return (
    <div className="gallery" id="gallery">
      <div className="container">
        <div className="gallery__wrapper">
          <h4 className="gallery__name">{t('pricesname')}</h4>
          <h1 className="gallery__title">{t('pricestitle')}</h1>
          <p className="gallery__text">
            {t('pricestext')}
          </p>
        </div>
      </div>
      <div className="carusel" ref={caruselRef}>
        <div id="drag-container" ref={dragContainerRef}>
          <div id="spin-container" ref={spinContainerRef}>
            <img src="/img/card1.png" alt="1" />
            <img src="/img/card2.png" alt="2" />
            <img src="/img/card3.png" alt="3" />
            <img src="/img/card1.png" alt="4" />
            <img src="/img/card2.png" alt="5" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
