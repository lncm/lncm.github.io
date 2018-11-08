import React from 'react';
import { Link } from 'gatsby';
import ExternalLink from './ExternalLink';

// const menuItems = ['about', 'blog', 'projects', 'team'];
const menuItems = ['about', 'projects'];

export default () => (
  <ul id="main-menu">
    {menuItems.map((k, i) => (
      <li key={k}>
        <Link to={i ? k : '/'}>{k}</Link>
      </li>
    ))}
    <li>
      <ExternalLink href="https://github.com/lncm">github</ExternalLink>
    </li>
  </ul>
);
