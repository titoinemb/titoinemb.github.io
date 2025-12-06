import React from 'react';
import "../../styles/layout/footer.scss";

export const Footer: React.FC = () => {
  return (
    <footer>
      <div className="left">
        <a href="mailto:mb_titoine@proton.me">mb_titoine@proton.me</a>
      </div>
      <div className="right">
        <a href="http://github.com/titoinemb" target="_blank" rel="noopener noreferrer">
          <img src="/svgs/github-mark-white.svg" alt="Github" width="25px" height="25px" />
        </a>
        <a href="https://www.npmjs.com/~titoinemb" target="_blank" rel="noopener noreferrer">
          <img src="/svgs/npm.svg" alt="Npm" width="23px" height="23px" />
        </a>
        <a href="https://www.linkedin.com/in/titoine-meulenyser-bellon/" target="_blank" rel="noopener noreferrer">
          <img src="/svgs/linkdin.svg" alt="LinkedIn" width="24px" height="24px" />
        </a>
      </div>
    </footer>
  );
};