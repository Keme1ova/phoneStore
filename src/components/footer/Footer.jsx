import React from 'react';
import logo from './../../assets/images/logo.svg';
import vk from './../../assets/images/VK.svg';
import lang from './../../assets/images/lang.svg';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="container footer d-flex justify-content-between p-4 mt-5">
      <nav>
        <img src={logo} alt="" />
      </nav>
      <nav className="d-flex flex-column align-items-start gap-3">
        <Link to="/favorites">Избранное</Link>
        <Link to="/cart">Корзина</Link>
        <Link to="/contact">Контакты</Link>
      </nav>
      <nav className="d-flex flex-column align-items-start">
        <Link to="/service">Условия сервиса</Link>
        <nav className="d-flex align-items-start w-100 mt-3 gap-2">
          <img src={lang} alt="" />
          <span>Каз</span>
          <span>Рус</span>
          <span>Eng</span>
        </nav>
      </nav>
      <nav className="d-flex gap-3 align-items-start">
        <img src={vk} alt="" />
        <img src={vk} alt="" />
        <img src={vk} alt="" />
        <img src={vk} alt="" />
      </nav>
    </footer>
  );
};
