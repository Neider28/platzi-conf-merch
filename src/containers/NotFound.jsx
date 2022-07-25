import React from 'react';
import { Helmet } from 'react-helmet';
import '../styles/components/NotFound.css';

const NotFound = () => {
  return (
    <>
      <Helmet>
        <tittle>Not Found</tittle>
        <div className="not-found"> </div>;
      </Helmet>
    </>
  );
};

export { NotFound };
