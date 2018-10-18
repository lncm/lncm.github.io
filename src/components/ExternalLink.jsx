import React from 'react';

export default ({ children, ...props }) => (
  <a
    target="_blank"
    rel="noopener noreferrer"
    {...props}
  >
    {children}
  </a>
);
