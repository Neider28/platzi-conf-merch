import React from 'react';
import { Helmet } from 'react-helmet';
import '../styles/components/NotFound.css';

const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>Not Found</title>
      </Helmet>
      <div className="not-found"> </div>;
    </>
  );
};

export { NotFound };
