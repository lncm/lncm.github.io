import React from "react";
import { Link } from "gatsby";

const menuItems = ['about', 'blog', 'projects', 'team'];

export default () => (
  <ul id="main-menu">
    {menuItems.map((k, i) => (
      <li key={k}>
        <Link to={i ? k : '/'}>{k}</Link>
      </li>
    ))}
    <li>
      <a
        target="_blank"
        href="https://github.com/lncm"
        rel="noopener noreferrer"
      >
        github
      </a>
    </li>
  </ul>
)
