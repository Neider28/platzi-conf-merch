import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Home } from '../containers/Home.jsx';
import { Checkout } from '../containers/Checkout.jsx';
import { Success } from '../containers/Success.jsx';
import { Payment } from '../containers/Payment.jsx';
import { Information } from '../containers/Information.jsx';
import { NotFound } from '../containers/NotFound.jsx';
import { Cancel } from '../containers/Cancel.jsx';
import { Error } from '../containers/Error.jsx';
import { Layout } from '../components/Layout.jsx';
import { AppContext } from '../context/AppContext.js';
import { useInitialState } from '../hooks/useInitialState.js';

const App = () => {
  const initialState = useInitialState();

  return (
    <AppContext.Provider value={initialState}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/checkout" element={<Checkout />} />
            <Route
              exact
              path="/checkout/information"
              element={<Information />}
            />
            <Route exact path="/checkout/payment" element={<Payment />} />
            <Route exact path="/checkout/success" element={<Success />} />
            <Route exact path="/checkout/cancel" element={<Cancel />} />
            <Route exact path="/checkout/error" element={<Error />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </AppContext.Provider>
  );
};

export { App };
