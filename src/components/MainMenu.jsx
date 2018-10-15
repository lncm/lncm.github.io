import React from "react";
import { Link } from "gatsby";

const menuItems = ['about', 'blog', 'projects', 'team'];

export default () => (
  <ul style={{ padding: 0, textAlign: 'center' }}>
    {menuItems.map((k, i) => (
      <li key={k} style={{ padding: '10px', display: 'inline-block', textTransform: 'capitalize' }}>
        <Link to={i ? k : '/'}>{k}</Link>
      </li>
    ))}
  </ul>
)
