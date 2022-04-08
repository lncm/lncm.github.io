import React from 'react';
import { Link } from 'gatsby';

import SocialMedia from './SocialMedia';

export default () => (
  <div>
    <ul id="main-menu">
      <li>
        <Link to="/">About</Link>
      </li>
      <li>
        <Link to="/projects">Projects</Link>
      </li>
    </ul>
    <SocialMedia />
  </div>
);
