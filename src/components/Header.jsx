import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../context/AppContext.js';
import '../styles/components/Header.css';

const Header = () => {
  const { state } = useContext(AppContext);
  const { cart } = state;

  const reducer = (acumulador, currentValue) => acumulador + currentValue.qty;
  const totalQty = cart.reduce(reducer, 0)

  return (
    <div className="Header">
      <h1 className="Header--title">
        <Link to="/">PlatziConf Merch</Link>
      </h1>
      <div className="Header-checkout">
        <Link to="/checkout">
          <i className="fas fa-shopping-basket" />
        </Link>
        {cart.length > 0 && <div className="Header-alert">{totalQty}</div>}
      </div>
    </div>
  );
};

export { Header };
