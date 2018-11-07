import React from 'react';
import Helmet from 'react-helmet';

import 'normalize.css';
import '../css/index.scss';

import Header from './Header';

export default ({ children, title }) => (
  <div id="layout-container">
    <Helmet>
      <meta charSet="utf-8" />
      <title>LNCM</title>
      <meta name="description" content="Lightning Network Chiang Mai are a group of cryptocurrency developers and enthusiasts focused on payment channel technology for Bitcoin." />
    </Helmet>
    <Header />
    {title && <h2>{title}</h2>}
    <div className="content">
      {children}
    </div>
  </div>
);
