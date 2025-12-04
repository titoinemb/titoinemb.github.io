import "../../styles/layout/header.scss";

export const Header: React.FC = () => {
  return (
    <header>
      <ul>
        <li><a href="/">Acceuil</a></li>
        <li><a href="/projects">Projets</a></li>
      </ul>
    </header>
  );
};