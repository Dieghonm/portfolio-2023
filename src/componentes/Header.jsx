import React from 'react';
import perfil from '../img/perfil.jpeg'
import '../Styles/Header.css';

function Header() {
  return (
    <header className="header">
      <div className="container">
        <img src={perfil} alt="Minha Foto" />
        <h1 className="header-title">Olá, eu sou o Diegho</h1>
        <h3 className="about-title">Sou um programador e desenvolvedor web.</h3>
      </div>
    </header>
  );
}

export default Header;
