import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import '../styles/components/Error.css';

const Error = () => {
  return (
    <>
      <Helmet>
        <title>Checkout | Error</title>
      </Helmet>
      <div className="Error">
        <div className="Error-image"></div>
        <div className="Error-content">
          <Link to="/checkout">
            <button>Try again</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export { Error };
