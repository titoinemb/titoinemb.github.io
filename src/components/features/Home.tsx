import React from 'react';
import { Link } from "react-router-dom";
import "../../styles/features/home.scss";
import { useHome } from "../../hooks";

export const Home: React.FC = () => {
  const { handleWords, projectsJson } = useHome();

  return (
    <div className="home">
      <div className="top">
        <div className="title">À propos de moi</div>
        <div className="description">
          Je m'appelle Titoine et je suis née en <span className="words" onClick={handleWords}>France</span>.
          À l'âge de 12 ans, j'ai déménagé au <span className="words" onClick={handleWords}>Canada</span>, où j'ai commencé à explorer ma passion pour la technologie et le développement.
          À <span className="words" onClick={handleWords}>13 ans</span>, j'ai commencé à coder, ce qui m'a permis d'acquérir des compétences précieuses et une solide expérience en développement web.
          Mon expertise s'est particulièrement développée en backend, où je me sens le plus à l'aise pour résoudre des problèmes complexes et créer des solutions efficaces.
          Avec une approche axée sur le détail et un engagement constant envers l'apprentissage, je continue à élargir mes connaissances et à développer des projets qui reflètent ma passion pour le code.
          <div className="titletools">Les principaux langages et outils que j'utilise quotidiennement :</div>
        </div>
        <div className="toolsList">
          <img src="https://camo.githubusercontent.com/6c41a840e943a7f0d7ae22524b249c7b4519a6a0881f8c2cbbe07b1c053d8b83/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f527562792d4343333432443f7374796c653d666c61742d737175617265266c6f676f3d72756279266c6f676f436f6c6f723d7768697465" alt="Ruby" />
          <img src="https://camo.githubusercontent.com/6dbef1ca6166bfbfe91c0eebdcf1eae67f3b80dee8bcad760902e0dfc3ac9d06/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f547970655363726970742d3030374143433f7374796c653d666c61742d737175617265266c6f676f3d74797065736372697074266c6f676f436f6c6f723d7768697465" alt="TypeScript" />
          <img src="https://camo.githubusercontent.com/4c0907124d278c8f6a0d77908524d2fc855c50bbe3be0111b8978cf01c4f7852/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f534353532d4343363639393f7374796c653d666c61742d737175617265266c6f676f3d73617373266c6f676f436f6c6f723d7768697465" alt="Scss" />
          <img src="https://camo.githubusercontent.com/02850ef8c028afc313aa14c74ee4860f288e641a9e191f8d1ba3ee8a5d319ea1/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4c696e75782d4643433632343f7374796c653d666c61742d737175617265266c6f676f3d6c696e7578266c6f676f436f6c6f723d626c61636b" alt="linux" />
          <img src="https://camo.githubusercontent.com/3077ad603fc97ef8746a9ba8262401bd554c42d160f3b89d559cd710d69c2f08/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f52656163742d3631444146423f7374796c653d666c61742d737175617265266c6f676f3d7265616374266c6f676f436f6c6f723d626c61636b" alt="React" />
          <img src="https://camo.githubusercontent.com/fe15e310dd2edec2fa0d8b68377cc4d2f6bb6c4a320f831455e12722c34fefa2/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f52656163742532304e61746976652d3631444146423f7374796c653d666c61742d737175617265266c6f676f3d7265616374266c6f676f436f6c6f723d626c61636b" alt="React Native" />
          <img src="https://camo.githubusercontent.com/840835b779db7791f57ebaf508e6a95983e30c0b762f1752e4f60dbccf85ee27/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4e6f64652e6a732d3333393933333f7374796c653d666c61742d737175617265266c6f676f3d6e6f6465646f746a73266c6f676f436f6c6f723d7768697465" alt="NodeJS" />
          <img src="https://img.shields.io/badge/MongoDB-47A248?style=flat-square&logo=mongodb&logoColor=white" alt="MongoDB" />
          <img src="https://camo.githubusercontent.com/c49132f37ac3f2f1b7c9a8fa2352e3f5874c6393039371b6fa4c9f405a7d8c94/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4d7953514c2d3434373941313f7374796c653d666c61742d737175617265266c6f676f3d6d7973716c266c6f676f436f6c6f723d7768697465" alt="MySQL" />
          <img src="https://camo.githubusercontent.com/a7f5c3f2f61969e4fd187fb812c757a1065393cf514db1e0d0c6c3c769bb3b00/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4578706f2d3142314632333f7374796c653d666c61742d737175617265266c6f676f3d6578706f266c6f676f436f6c6f723d7768697465" alt="Expo" />
          <img src="https://camo.githubusercontent.com/7e5aeeaedd14bc0b361b3f14d4d235da619598b2812fd494ecfb202a6cca5043/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4769742d4630353033323f7374796c653d666c61742d737175617265266c6f676f3d676974266c6f676f436f6c6f723d7768697465" alt="Git" />
        </div>
      </div>
      <div className="projects">
        <div className="list">
          <>
            {projectsJson.map((item: any, index: number) => {
              return (
                <Link to={item.link} key={index} className="item">
                  <div className="img">
                    <img src={item.cover} alt={item.titl} />
                  </div>
                  <div className="title">{item.title}</div>
                </Link>
              );
            })}
          </>
        </div>
      </div>
    </div>
  );
};