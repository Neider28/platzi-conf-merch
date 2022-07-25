import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../context/AppContext.js';
import { Helmet } from 'react-helmet';
import '../styles/components/Checkout.css';

const Checkout = () => {
  const { state, removeFromCart } = useContext(AppContext);
  const { cart } = state;

  const handleRemove = (product) => () => {
    removeFromCart(product);
  };

  const handleSumTotal = () => {
    const reducer = (accumulator, currentValue) => accumulator + (currentValue.price * currentValue.qty);
    const sum = cart.reduce(reducer, 0);

    return sum;
  };

  return (
    <>
      <Helmet>
        <title>Checkout | Cart</title>
      </Helmet>
      <div className={cart.length > 0 ? 'Checkout' : 'Checkout-empty'}>
      <div className="Checkout-content">
        {cart.length > 0 ? (
          <h3>Order list:</h3>
        ) : (
          <div className="no-orders"></div>
        )}
        {cart.map((item) => (
          <div className="Checkout-item" key={item.title}>
            <div className="Checkout-element">
              <h4>{item.title}</h4>
              <span>${item.price}</span>
              <span>{item.qty}</span>
              <span>${item.price * item.qty}</span>
            </div>
            <button type="button" onClick={handleRemove(item)}>
              <i className="fas fa-trash-alt" />
            </button>
          </div>
        ))}
      </div>
      {cart.length > 0 && (
        <div className="Checkout-sidebar">
          <h3>Total price: ${handleSumTotal()}</h3>
          <Link to="/checkout/information">
            <button type="button">Continue order</button>
          </Link>
        </div>
      )}
    </div>
    </>
  );
};

export { Checkout };
