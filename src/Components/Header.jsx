import React from 'react';
import '../assets/styles/Components/header.scss';
import { Link } from 'react-router-dom';

const Header = () => (
  <header className='header'>
    <Link to='/'>
      <img className='header__img' src='../../../public/images/logo-platzi-video-BW2.png' alt='Platzi Video' />
    </Link>
    <div className='header__menu'>
      <div className='header__menu--profile'>
        <img src='../../../public/images/user-icon.png' alt='' />
        <p>Perfil</p>
      </div>
      <ul>
        <li><a href='/'>Cuenta</a></li>
        <li><a href='/'>Cerrar Sesión</a></li>
      </ul>
    </div>
  </header>
)

export default Header;