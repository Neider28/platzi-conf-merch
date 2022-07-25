import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import '../styles/components/Cancel.css';

const Cancel = () => {
  return (
    <>
      <Helmet>
      <title>Checkout | Cancel</title>
      </Helmet>
      <div className="Cancel">
        <div className="Cancel-image"></div>
        <div className="Cancel-content">
            <Link to="/checkout">
                <button>Try again</button>
            </Link>
        </div>
      </div>
    </>
  );
};

export { Cancel };