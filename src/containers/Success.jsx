import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext.js';
import { Helmet } from 'react-helmet';
import '../styles/components/Success.css';

const Success = () => {
  const { state } = useContext(AppContext);
  const { buyer } = state;

  return (
    <>
      <Helmet>
      <tittle>Checkout | Success</tittle>
      </Helmet>
      <div className="Success">
        <div className="Success-content">
          <h2>{buyer.length > 0 ? buyer[0].name : "Name"}, thanks for your purchase</h2>
          <span>Your order will arrive in 3 days at your address: {buyer.length > 0 ? buyer[0].address : "Undefined location"}</span>
          <div className="check"></div>
          <div className="Success-map">
          </div>
        </div>
      </div>
    </>
  );
};

export { Success };
