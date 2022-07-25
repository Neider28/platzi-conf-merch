import React from 'react';
import { Products } from '../components/Products.jsx';
import { Helmet } from 'react-helmet';
import initialState from '../initialState.js';

const Home = () => {
  return (
    <>
      <Helmet>
        <meta name="twitter:card" content="summary_large_image"/>
        <meta name="twitter:site" content="@TU_USER"/>
        <meta name="twitter:creator" content="@TU_USER"/>
        <meta name="twitter:title" content="PlatziConf Store"/>
        <meta name="twitter:description" content="PlatziConf Store"/>
        <meta
          name="twitter:image"
          content="https://s3.amazonaws.com/gndx.dev/gndxdev.png"
        />
        <meta property="og:title" content="PlatziConf Store"/>
        <meta property="og:description" content="PlatziConf Store"/>
        <meta
          property="og:image"
          content="https://s3.amazonaws.com/gndx.dev/gndxdev.png"
        />
        <meta property="og:url" content="platzistore.xyz" />
        <meta property="og:site_name" content="PlatziConf Store" />
        <meta property="og:locale" content="es_ES" />
        <meta property="og:type" content="article" />
        <meta property="fb:app_id" content="ID_APP_FACEBOOK" />
      </Helmet>
      <Products products={initialState.products} />;
    </>
  );
};

export { Home };
