import React from 'react';
import "../../styles/layout/header.scss";

function Header() {
  return (
    <header>
      <ul>
        <li>
          <a href="/">Acceuil</a>
        </li>
        <li>
          <a href="/project">Projets</a>
        </li>
      </ul>
    </header>
  );
}

export default Header;