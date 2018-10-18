import React from 'react';

import 'normalize.css';
import '../css/index.scss';

import Header from './Header';

export default ({ children }) => (
  <div id="layout-container">
    <Header />
    {children}
  </div>
);
