import React from 'react';
import { Link } from "react-router-dom";
import "../../styles/layout/header.scss";

export const Header: React.FC = () => {
  return (
    <header>
      <ul>
        <li><Link to="/">Accueil</Link></li>
        {/*<li><Link to="/projects">Projets</Link></li>*/}
      </ul>
    </header>
  );
};