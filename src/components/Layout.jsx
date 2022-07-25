import React from 'react';
import { Header } from './Header.jsx';
import { Footer } from './Footer.jsx';
import '../styles/components/Layout.css';

const Layout = ({ children }) => {
  return (
    <div className="Main">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export { Layout };
