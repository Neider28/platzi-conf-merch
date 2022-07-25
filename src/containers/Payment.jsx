import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext.js';
import { Helmet } from 'react-helmet';
import { PayPalScriptProvider, PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js";
import '../styles/components/Payment.css';

const Payment = () => {
  const { state, addNewOrder, cleanCart } = useContext(AppContext);
  const { cart, buyer } = state;
  const history = useNavigate();

  const handleSumTotal = () => {
    const reducer = (accumulator, currentValue) => accumulator + (currentValue.price * currentValue.qty);
    const sum = cart.reduce(reducer, 0);

    return sum.toString();
  };

  const handlePaymentSuccess = (data) => {
    if (data.status === 'COMPLETED') {
      const newOrder = {
        buyer,
        product: cart,
        payment: data,
      };
      addNewOrder(newOrder);
      cleanCart();
      history('/checkout/success');
    }
  };

  const amount = handleSumTotal();

  return (
    <>
      <Helmet>
        <tittle>Checkout | Payment</tittle>
      </Helmet>
      <div className="Payment">
      <div className="Payment-content">
        <h3>Resumen del pedido</h3>
        {cart.map((item) => (
          <div className="Payment-item" key={item.title}>
            <div className="Payment-element">
              <h4>{item.title}</h4>
              <span>${item.price}</span>
              <span>{item.qty}</span>
              <span>${item.price * item.qty}</span>
            </div>
          </div>
        ))}
        {cart.length === 0 ? <div className="empty-sidebar empty"></div> : 
          <div className="Payment-button">
            <PayPalScriptProvider 
              options={{ "client-id": "AQMsA2MzGSLjvCaMF-pZuD3H1R3Gdw7FEVsTlB7RNn8kNceU6dmQur5Dq0dbkCg-ETFEpe6EBsjV5ikY"}}
            >
              <PayPalButtons 
                createOrder={(data, actions) => {
                  return actions.order.create({
                    purchase_units: [
                      {
                        amount: {
                            value: amount,
                        },
                      },
                    ],
                  });
                }}
                onApprove={(data, actions) => {
                  return actions.order.capture().then((details) => {
                    handlePaymentSuccess(details);
                  });
                }}
              />
            </PayPalScriptProvider>
          </div>
        }
      </div>
      </div>
    </>
  );
};

export { Payment };
