import React, { useState } from "react";
import "./Contact.scss";
import { useTranslation } from "react-i18next";
import { t } from "i18next";

const Contact = () => {

  const { t, i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const message = `
      <b>Имя:</b>${formData.name}\n<b>Фамилия:</b>${formData.surname}\n<b>Email:</b>${formData.email}\n<b>Сообщение:</b> ${formData.message}`;

    const token = "7922624664:AAEPfwPxynkn1fBV1QtW5utopyVmoSuQ4m8";
    const chatId = "-4554873105";
    const url = `https://api.telegram.org/bot${token}/sendMessage`;

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: message,
        parse_mode: "HTML",
      }),
    })
      .then((response) => {
        if (response.ok) {
          alert("Сообщение успешно отправлено!");
          setFormData({
            name: "",
            surname: "",
            email: "",
            message: "",
          });
        } else {
          alert("Ошибка при отправке сообщения.");
        }
      })
      .catch((error) => {
        console.error("Ошибка:", error);
        alert("Ошибка при отправке сообщения.");
      });
  };

  return (
    <div className="contact" id="contacts">
      <div className="container">
        <div className="contact__wrapper">
          <h1 className="contact__title">{t('contacttitle')}</h1>
          <p className="contact__text">
            {t('contacttext')}
          </p>
          <form onSubmit={handleSubmit} className="form">
            <div className="inps">
              <input
                type="text"
                name="name"
                placeholder={t('inp1')}
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="surname"
                placeholder={t('inp2')}
                value={formData.surname}
                onChange={handleChange}
                required
              />
            </div>
            <input
              type="email"
              name="email"
              placeholder={t('inp3')}
              value={formData.email}
              onChange={handleChange}
              className="contact__email"
              required
            />
            <textarea
              name="message"
              className="contact__textarea"
              placeholder={t('inp4')}
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <button type="submit" className="contact__btn">
            {t('btn')}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
