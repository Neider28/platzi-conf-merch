import React from 'react';
import '../styles/components/Footer.css';

const Footer = () => {
  return (
    <div className="Footer">
      <h1 className="Footer-title">PlatziConf Merch</h1>
      <a href="https://github.com/Neider28/platziConf-Merch/" target="_blank">
        <div className="github"></div>
      </a>
      <p className="Footer-made">❮❯ by Neider Silva, 2022</p>
    </div>
  );
};

export { Footer };
