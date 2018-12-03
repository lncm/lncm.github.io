import React from 'react';
import { Link } from 'gatsby';

import SocialMedia from './SocialMedia';

// const menuItems = ['about', 'blog', 'projects', 'team'];
const menuItems = ['about', 'projects', 'team'];

export default () => (
  <div>
    <ul id="main-menu">
      {menuItems.map((k, i) => (
        <li key={k}>
          <Link to={i ? k : '/'}>{k}</Link>
        </li>
      ))}
    </ul>
    <SocialMedia />
  </div>
);
