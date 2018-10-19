import React from 'react';
import Helmet from 'react-helmet';

import 'normalize.css';
import '../css/index.scss';

import Header from './Header';

export default ({ children }) => (
  <div id="layout-container">
    <Helmet>
      <meta charSet="utf-8" />
      <title>LNCM</title>
      <link rel="description" href="Lightning Network Chiang Mai" />
    </Helmet>
    <Header />
    {children}
  </div>
);
