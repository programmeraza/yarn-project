import React, { useState } from 'react'
import "./Header.scss"

const Header = () => {

const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
    <section className="header">
        <div className="container">
            <div className="header__wrapper">
                <ul className="header__ul">
                    <a href="#">About</a>
                    <a href="#">Price</a>
                    <a href="#">Advantages</a>
                    <a href="#">Gallery</a>
                    <a href="#">Contacts</a>
                </ul>
                <h1>LOGO</h1>
                <button className='header__btn'>+998910010657</button>

                <button className="header__menu__toggle" onClick={handleMenuToggle}>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                <ul className={menuOpen ? 'header__menuOpen' : ''}>
                    <a href="#">About</a>
                    <a href="#">Price</a>
                    <a href="#">Advantages</a>
                    <a href="#">Gallery</a>
                    <a href="#">Contacts</a>
                </ul>
            </div>
        </div>
    </section>
    </>
  )
}

export default Header